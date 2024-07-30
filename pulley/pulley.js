fetchInitial()
function fetchInitial() {
    fetch('https://ciphersprint.pulley.com/bpmauge@gmail.com').then(response => {
        return response.json()
    }).then(dataObj => {
        console.log(dataObj)
        newFetch(dataObj.encrypted_path)
    })
}

function newFetch(urlPath) {
    console.log(urlPath, urlPath.length, urlPath[urlPath.length - 1])
    let path = ''

    fetch(`https://ciphersprint.pulley.com/${urlPath}`).then(response => {
        return response.json()
    }).then(dataObj => {
        console.log(dataObj)
        if (dataObj.encrypted_path.charAt(5) === '[') {
            path = dataObj.encrypted_path.slice(6, dataObj.encrypted_path.length - 1)
        } else {
            path = dataObj.encrypted_path.slice(5)
        }

        switch (dataObj.encryption_method) {
            case "converted to a JSON array of ASCII values":
                let first = newDecryption(path.split(','));
                newFetch(first);
                break;
            case "swapped every pair of characters":
                let second = swapCharacters(path.split(''))
                newFetch(second);
                break;
            default:
                console.log('not in switch anymore')
        }
        if (dataObj.encryption_method.includes('added')) {
            console.log('hi')
            let addition = dataObj.encryption_method.split(' ')[1]
            let third = decryptWithAddition(path.split(''), addition)
            newFetch(third);
        }
        if (dataObj.encryption_method.includes('key')) {
            let key = dataObj.encryption_method.split(': ')[1]
            let fourth = hexDecoded(path, key)
            console.log("fourth function",fourth)
        }
    })
}

function newDecryption(path) {
    let newPath = 'task_';
    for (let i = 0; i < path.length; i++) {
        newPath += String.fromCharCode(path[i]);
    }
    return newPath;
};

function swapCharacters(path) {
    let newPath = 'task_';
    for (let i = 0; i < path.length; i++) {
        if (i % 2 == 0) {
            if ((i + 1) < path.length) {
                newPath += path[i + 1];
            }
            newPath += path[i];
        }
    }
    return newPath;
};

function decryptWithAddition(path, num) {
    num = parseInt(num);
    let newPath = 'task_';

    for (let i = 0; i < path.length; i++) {
        let newCode = path.join('').charCodeAt(i) + num;
        newPath += String.fromCharCode(newCode);
    }
    return newPath;
};
function hexDecoded(path, key){
console.log("path: ", path, "key: ", key)
return `path: ${path} \n key: ${key} `
}



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

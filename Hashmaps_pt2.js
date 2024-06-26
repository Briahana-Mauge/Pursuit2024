//hashmap api
/*
1. Create a hash map
2. add every lowercase alphabet character to it, with a value of 0
    1. add them in alphabetical order(hash maps care about entry order)
3. delete all of the vowels in the hash map (a,e,i,o,u)
4. get an array of all of the keys in the map and store them in a variable
5. turn that array of keys into a string
6. final string === 'bcdfghjklmnpqrstvwxyz'
*/

var newMap = new Map();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
var vowels = 'aeiou';
var keyArr = []
var keyStr = ""

function fillMapWithAlpha(alphabet) {
    for (let i = 0; i < alphabet.length; i++) {
        newMap.set(alphabet[i], 0)
    }
    return newMap;
}
// console.log(fillMapWithAlpha(alphabet))

function deleteVowelsFromMap(vowels) {
    for (let i = 0; i < vowels.length; i++) {
        newMap.delete(vowels[i])
    }
    return newMap
}
// console.log(deleteVowelsFromMap(vowels))

function getKeysFromMap() {
    for (let [key, val] of newMap) {
        keyArr.push(key)
    }
    return keyArr
}
// console.log(getKeysFromMap())

function turnKeyArrToString(arr) {
    let finalStr = arr.join('');
    return finalStr === 'bcdfghjklmnpqrstvwxyz'
}

// console.log(turnKeyArrToString(keyArr))

function allHashmapMethods(alphabet, vowels, keyArr) {
    fillMapWithAlpha(alphabet);
    deleteVowelsFromMap(vowels);
    getKeysFromMap();
    let string = turnKeyArrToString(keyArr)
    return string

}
console.log(allHashmapMethods(alphabet, vowels, keyArr))

//Questions
// 1. Write a function that takes a string as input and returns the most common letter in the string
/*steps:
create map & vars
    a new map()
    let commonLet
    let MaxNum
loop through string
    if letters.has(string[idx]) 
        letters.set(string[idx], letters.get(string[idx])+1)
    else 
        letters.set(string[idx], 1)

loop through map comparing value of keys to the maxNum variable.
update if larger and save letter
    if(val>maxNum){
    maxNum = val
    commonLet = key
}
return common letter
*/

// function getMostCommonLetter(string) {
//     let letters = new Map();
//     let commonLet = "";
//     let maxNum = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (letters.has(string[i])) {
//             letters.set(string[i], letters.get(string[i]) + 1);

//         } else {
//             letters.set(string[i], 1);
//         }
//     }
//     for (let [key, val] of letters) {
//         if (val > maxNum) {
//             commonLet = key;
//             maxNum = val;
//         }
//     }
//     return commonLet;
// }

/*create map & vars
    a new map()
    let commonLet
    let MaxNum
loop through string
    if letters.has(string[idx]) 
        letters.set(string[idx], letters.get(string[idx])+1)
        
        if letters.get(string[idx]) is greater than current maxNum; update variables
         maxNum = val
        commonLet = key
    else 
        letters.set(string[idx], 1)

return common letter
*/
// function getMostCommonLetter(string) {
//     let letters = new Map();
//     let commonLet = "";
//     let maxNum = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (letters.has(string[i])) {
//             letters.set(string[i], letters.get(string[i]) + 1);

//            if(letters.get(string[i]) > maxNum){
//             maxNum = letters.get(string[i])
//             commonLet = string[i];
//            }
//         } else {
//             letters.set(string[i], 1);
//         }
//     }

//     return commonLet;
// }

// console.log(getMostCommonLetter('whereareyouuuuuuu'))

// 2. Write a function that takes a string as input and returns the 2nd most common letter in the string

function getSecondMostCommonLetter(string) {
    // let letters = new Map();
    // let maxNum = 0;
    // let secondLetter = "";
    // let secondMax = 0;

    // for (let i = 0; i < string.length; i++) {
    //     if (letters.has(string[i])) {
    //         letters.set(string[i], letters.get(string[i]) + 1);

    //     } else {
    //         letters.set(string[i], 1);
    //     }
    // }
    // for (let [key, val] of letters) {
    //     if (val > maxNum) {
    //         maxNum = val;
    //     } else if (val > secondMax) {
    //         secondLetter = key;
    //         secondMax = val;
    //     }

    // }
    // console.log([...letters.entries()].sort())
    // return secondLetter;

    let maxLetterCount = 0;
    let secondMax = 0
    let secondLetter = ""
    const map = new Map()

    for (const letter of string) {
        const count = map.get(letter) + 1 || 1;
        map.set(letter, count)
        if ((count > maxLetterCount)) {
            maxLetterCount = count;
        } else if (count > secondMax) {
            secondMax = count;
            secondLetter = letter
        }
    }
    return secondLetter
}
console.log(getSecondMostCommonLetter('whereareyouu'));
console.log(getSecondMostCommonLetter('aabbb'));
const fs = require('fs');

const fileText = fs.readFileSync('./sampleText.txt', 'utf8')

//write a function that returns the most common word in a string
//remove special characters
//words are case insensative


/* create hashmap
lowercase the string and remove special characters, and split to array
let string = input.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(""")
loop through the the text file
each word seen,
if(map.has(word)){
    map.set(word, map.get(word)+1)
}else
map.set(word, 1)

loop through the map and return max number
 */



function mostCommonWord(string) {
    const words = new Map();
    let text = string.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(" ");
    let maxFreq = 0;
    let maxWord = "";

    // for (let i = 0; i < text.length; i++) {
    //     if (words.has(text[i])) {
    //         words.set(text[i], words.get(text[i]) + 1);
    //     } else {
    //         words.set(text[i], 1);
    //     }
    // }
    text.forEach((word) => {
        words.has(word) ? words.set(word, words.get(word) + 1) : words.set(word, 1);
        // words.set(word, (words.get(word) || 0) + 1); //left associativity   if the word is undefined(not in map), return 0 and add 1 elsee get the freq of word and add 1
    })

    for (let [word, freq] of words) {
        if (freq > maxFreq) {
            maxFreq = freq;
            maxWord = word;
        }
    }
    console.log("the most common word is: ")
    return maxWord;
}
function mostFiveCommonWords(string) {
    const words = new Map();
    let text = string.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(" ");
    let maxFreq = 0;
    let maxWord = "";

    text.forEach((word) => {
        words.has(word) ? words.set(word, words.get(word) + 1) : words.set(word, 1);
    })

    for (let [word, freq] of words) {
        if (freq > maxFreq) {
            maxFreq = freq;
            maxWord = word;
        }
    }

    sortedMap = new Map([...words.entries()].sort((a, b) => b[1] - a[1]));
    let maxFive = []

    let sortedArr = [...sortedMap.entries()]
    for (let i = 0; i < 5; i++) {
        maxFive.push(sortedArr[i][0])
    }
    console.log('the max five words are: ')
    return maxFive;

}

console.log(mostCommonWord(fileText))
console.log(mostFiveCommonWords(fileText))
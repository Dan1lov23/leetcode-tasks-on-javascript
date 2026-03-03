// Find Common Characters

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
//
//
//
// Example 1:
//
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
//
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

function FindCommonCharacter(words) {

    const includeCheckFunction = (arr, element, index) => {

    }

    let resultArr = [];
    let splitWordsArr = [];

    for (let a = 0; a < words.length; a++) {
        splitWordsArr.push(words[a].split(''));
    }

    for (let a = 0; a < words.length; a++) {
        for (let b = 0; b < words[a].length; b++) {

            let marker = true;

            for (let c = 0; c < splitWordsArr.length; c++) {
                if (!splitWordsArr[c].includes(words[a][b])) {
                    marker = false;
                }
            }

            if (marker && !resultArr.includes(words[a][b])) {
                resultArr.push(words[a][b]);
            }
        }
    }

    return resultArr;

}

console.log(FindCommonCharacter(["bella","label","roller"]));

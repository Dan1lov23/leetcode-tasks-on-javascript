// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
//
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
//
//
//
// Example 1:
//
// Input: s = "IceCreAm"
//
// Output: "AceCreIm"
//
// Explanation:
//
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
//
// Example 2:
//
// Input: s = "leetcode"
//
// Output: "leotcede"

function reverseVowelsOfAString(s) {

    let resultString = "";
    let vowelsArr = [];

    const vowelsCheckArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let a = 0; a < s.length; a++) {
        if (vowelsCheckArr.includes(s[a])) {
            vowelsArr.push(s[a]);
        }
    }

    vowelsArr = vowelsArr.reverse();

    let counter = 0;

    for (let a = 0; a < s.length; a++) {
        if (vowelsArr.includes(s[a])) {
            resultString += vowelsArr[counter];
            counter++;
        } else {
            resultString += s[a];
        }
    }

    return resultString;

}

console.log(reverseVowelsOfAString("leetcode"));

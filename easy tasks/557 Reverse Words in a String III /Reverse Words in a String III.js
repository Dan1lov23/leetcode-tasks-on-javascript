// Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
//
//
// Example 1:
//
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
//
// Input: s = "Mr Ding"
// Output: "rM gniD"

function ReverseWordsInAStringIII(s) {

    let newString = "";
    let stringArr = s.split(" ");

    let result = "";

    for (let a = 0; a < stringArr.length; a++) {
        if (a + 1 === stringArr.length) {
            result += stringArr[a].split('').reverse().join('');
        } else {
            result += stringArr[a].split('').reverse().join('') + " ";
        }
    }

    return result;

}

console.log(ReverseWordsInAStringIII("Let's take LeetCode contest"));

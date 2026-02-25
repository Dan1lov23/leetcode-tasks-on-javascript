// Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//
// Each letter in magazine can only be used once in ransomNote.
//
//
//
// Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function RansomNote(ransomNote, magazine) {

    let arr1 = [];
    let arr2 = [];

    for (let a = 0; a < ransomNote.length; a++) {
        arr1.push(ransomNote[a]);
    }

    for (let b = 0; b < magazine.length; b++) {
        arr2.push(magazine[b]);
    }

    let removed = false;

    for (let a = 0; a < arr1.length; a++) {
        if (arr2.length === 0) {
            return false;
        }

        for (let b = 0; b < arr2.length; b++) {
            if (arr1[a] === arr2[b]) {
                arr1.splice(a, 1);
                arr2.splice(b, 1);
                removed = true;
                a--;
                break;
            }
        }
    }

    if (!removed) {
        return false;
    }


}

console.log(RansomNote("aa", "aab"));

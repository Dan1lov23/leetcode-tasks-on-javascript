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

    let minFreq = {};
    for (let ch of words[0]) {
        minFreq[ch] = (minFreq[ch] || 0) + 1;
    }

    for (let i = 1; i < words.length; i++) {
        const freq = {};
        for (let ch of words[i]) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        for (let ch in minFreq) {
            if (freq[ch]) {
                minFreq[ch] = Math.min(minFreq[ch], freq[ch]);
            } else {
                delete minFreq[ch];
            }
        }
    }

    const result = [];
    for (let ch in minFreq) {
        for (let i = 0; i < minFreq[ch]; i++) {
            result.push(ch);
        }
    }

    return result;
}

console.log(FindCommonCharacter(["bella","label","roller"]));

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    var matches = [];
    var patternPattern = [];
    var patternMap = new Map();
    var count = 1;
    for (let i = 0; i < pattern.length; i++) {
        patternMap.set(pattern[i], patternMap.has(pattern[i]) ? patternMap.get(pattern[i]) : 1);
        if (pattern[i] === pattern[i + 1]) count++;
        else { patternPattern.push(count); count = 1 };
    }

    for (let i = 0; i < words.length; i++) {
        var wordPattern = [];
        var wordMap = new Map();
        var charCount = 1;
        var valid = true;
        for (let j = 0; j < words[i].length; j++) {
            wordMap.set(words[i], wordMap.has(words[i]) ? wordMap.get(pattern[i]) : 1);

            if (words[i][j] === words[i][j + 1]) charCount++;
            else wordPattern.push(charCount);
        }
        for (let j = 0; j < wordPattern.length; j++) {
            if (wordPattern[j] !== patternPattern[j]) valid = false;
        }
        if (valid)
            matches.push(words[i]);
    }
    return matches;
};
console.log(findAndReplacePattern(["a", "b", "c"], "a"));
// console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));
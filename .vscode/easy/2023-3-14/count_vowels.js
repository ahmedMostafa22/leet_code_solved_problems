/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    var res = 0;
    var vowels = Array(5);
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = left; i <= right; i++) {
        if (vowels.find(a => a === words[i][0]) && vowels.find(a => a === words[i][words[i].length - 1])) {
            res++;
        }
    }
    return res;
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2));
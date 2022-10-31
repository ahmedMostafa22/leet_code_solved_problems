/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    var res = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(pref)) {
            res++;
        }
    }
    return res;
};
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    for (let i = 0; i < word.length; i++)
        if (isEqual(word.substring(0, i).concat(word.substring(i + 1)))) return true;
    return false;
};

/**
 * @param {string} word
 * @return {boolean}
 */
var isEqual = function (word) {
    let letters = new Map();

    for (let i = 0; i < word.length; i++)
        letters.set(word[i], letters.get(word[i]) ? letters.get(word[i]) + 1 : 1);
    var isEqual = true;
    var freq = letters.get(word[0]);
    letters.forEach((v, k) => { if (freq !== v) isEqual = false; });
    return isEqual;
};
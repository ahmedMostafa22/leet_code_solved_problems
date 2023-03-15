/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    var map = new Map();
    var chars = s.split('');
    chars.forEach(c => {
        map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
    });
    if (!map.get(letter)) {
        return 0;
    }
    return Math.floor((map.get(letter) / s.length) * 100);
};
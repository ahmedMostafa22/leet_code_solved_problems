/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var ws = s.split(' ');
    var words = ws.filter(w => w != '');
    return words.reverse().join(' ');
};

[   [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]]
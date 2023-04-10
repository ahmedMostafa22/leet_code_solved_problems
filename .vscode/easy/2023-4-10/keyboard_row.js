/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    var firstRow = 'qwertyuiop'.split('');
    var secondRow = 'asdfghjkl'.split('');
    var thirdRow = 'zxcvbnm'.split('');
    var result = [];
    words.forEach(w => {
        var validFirst = true;
        var validSecond = true;
        var validThird = true;

        var chars = w.toLowerCase().split('');
        chars.forEach(c => {
            if (!firstRow.find(f => c === f)) {
                validFirst = false;
            }
            if (!secondRow.find(f => c === f)) {
                validSecond = false;
            }
            if (!thirdRow.find(f => c === f)) {
                validThird = false;
            }
        });
        if (validFirst || validSecond || validThird) {
            result.push(w);
        }
    });
    return result;
};
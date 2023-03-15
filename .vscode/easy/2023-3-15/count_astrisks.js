/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    var dividerStack = [];
    var result = 0;

    s.split('').forEach(c => {
        if (c === '|') {
            if (dividerStack.length === 0) {
                dividerStack.push('|');
            } else {
                dividerStack.pop();
            }
        }
        else if (c === '*' && dividerStack.length === 0) {
            result++;
        }
    });
    return result;
};
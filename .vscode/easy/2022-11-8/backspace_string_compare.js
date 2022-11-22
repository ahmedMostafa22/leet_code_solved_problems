/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    var actualS = [], actualT = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '#') {
            actualS.pop();
        }
        else {
            actualS.push(s.charAt(i));
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t.charAt(i) === '#') {
            actualT.pop();
        }
        else {
            actualT.push(t.charAt(i));
        }
        console.log(actualT);
    }
    console.log(actualS + ":" + actualT);
    return actualS.join('') === actualT.join('');
};

console.log(backspaceCompare("y#fo##f", "y#f#o##f"));
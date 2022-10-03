/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var s = x.toString();
    for (var i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('111222111'));
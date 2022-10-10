/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    var i = 0, j = 0;
    var counter = 0;
    while (i < s.length) {
        while (j < t.length) {
            if (s[i] === t[j]) {
                j++;
                counter++;
                break;
            }
            j++;
        }
        i++;
    }
    return counter === s.length;
};
console.log(isSubsequence('abc', 'ahgdc'));
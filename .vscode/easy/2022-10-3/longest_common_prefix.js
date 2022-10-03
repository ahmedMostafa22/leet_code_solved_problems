/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs[0].length; i++) {
        var res = strs[0].substring(0, strs[0].length - i);
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j].startsWith(res)) {
                break;
            }
            if (j === strs.length - 1) {
                return res;
            }
        }
    }
    return "";
};

console.log(longestCommonPrefix(["c", "acc", "ccc"]));
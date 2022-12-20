
/**
 * @param {string} s
 * @return {number}
 */
var getStringValue = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (isNaN(parseInt(s.charAt(i)))) {
            return s.length;
        }
    }
    return parseInt(s);
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    var ans = -1;
    strs.forEach(s => {
        console.log(getStringValue(s));
        if (getStringValue(s) > ans)
            ans = getStringValue(s);
    });
    return ans;
};

maximumValue(["alic3", "bob", "3", "4", "00000"]);


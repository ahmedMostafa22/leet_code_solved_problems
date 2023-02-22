/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    var res = 0;
    var start = 0;
    for (let i = 1; i < s.length; i++) {
        var balanced = checkBalance(s.substring(start, i + 1));
        if (balanced) { start = i + 1; i = start; res++ }
    }
    return res;
};
var checkBalance = function (string) {
    console.log(string);
    var lCount = 0, rCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'R') {
            rCount++;
        } else {
            lCount++;
        }
    }
    // if (lCount === rCount) {
    //     console.log(string);

    // }
    return lCount === rCount;
}

console.log(balancedStringSplit('RLRRLLRLRL'));
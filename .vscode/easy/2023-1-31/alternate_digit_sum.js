/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    var digitSum = 0;
    var stringNum = n.toString();
    for (var j = 0; j < stringNum.length; j++) {
        if (j % 2 == 0) {
            digitSum = digitSum + parseInt(stringNum.charAt(j));
        } else {
            digitSum = digitSum - parseInt(stringNum.charAt(j));
        }
    }
    return digitSum;
};
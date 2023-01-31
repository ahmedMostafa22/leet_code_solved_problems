/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {

    var sum = 0;
    var digitSum = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    for (var i = 0; i < nums.length; i++) {
        var stringNum = nums[i].toString();
        for (var j = 0; j < stringNum.length; j++) {
            digitSum += parseInt(stringNum.charAt(j));
        }
    }

    return Math.abs(sum - digitSum);
};
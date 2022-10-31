/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    var sum = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
            sum += nums[i];
            count++;
        }
    }
    return count === 0 ? 0 : Math.floor(sum / count);
};

console.log(averageValue([1, 3, 6, 10, 12, 15]));

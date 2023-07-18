/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let average = [];
    let sum = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (i >= k - 1) {
            average.push(sum / k);
            sum -= nums[start];
            start += 1;
        }
    }

    return Math.max(...average);
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
    var sum = [], reverseSum = [], ans = [];
    var lastSum = 0, lastReverseSum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum.push(lastSum + nums[i]);
        reverseSum.push(lastReverseSum + nums[nums.length - 1 - i]);
        lastSum += nums[i];
        lastReverseSum += nums[nums.length - 1 - i];
    }
    reverseSum.reverse();
    for (let i = 0; i < nums.length; i++) {
        var left = i === 0 ? 0 : sum[i - 1]; var right = i === nums.length - 1 ? 0 : reverseSum[i + 1];
        console.log(left, right);
        ans.push(Math.abs(left - right));
    }
    return ans;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
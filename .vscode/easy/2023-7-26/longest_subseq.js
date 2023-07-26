/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    var ans = [];
    nums.sort((a, b) => a - b);
    for (let x = 0; x < queries.length; x++) {
        var count = 0, sum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] + sum <= queries[x]) { count++; sum += nums[i]; } else break;
        }
        ans.push(count);
    }
    return ans;
};
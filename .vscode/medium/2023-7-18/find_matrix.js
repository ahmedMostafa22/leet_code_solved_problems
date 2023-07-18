/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    var ans = [];
    nums.sort((a, b) => a - b);

    var len = nums.length;
    var i = 0;
    while (i < len) {
        var inserted = false;
        for (let j = 0; j < ans.length; j++)
            if (!ans[j].includes(nums[i])) {
                ans[j].push(nums[i]); inserted = true;
                break;
            }
        if (!inserted) { ans.push([nums[i]]); }
        i++;

    }
    return ans;
};
// console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));

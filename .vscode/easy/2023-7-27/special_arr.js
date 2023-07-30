/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    for (let x = 0; x <= 1000; x++)
        for (let i = 0; i < nums.length; i++)
            if (nums[i] >= x) {
                if ((i === 0 || nums[i] !== nums[i - 1]) && nums.length - i === x)
                    return x;
                else break;
            }
    return -1;
};
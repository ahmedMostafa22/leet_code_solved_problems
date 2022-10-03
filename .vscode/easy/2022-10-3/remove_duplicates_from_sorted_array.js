/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = '_';
            count++;
        }
    }
    if (count != 0) {
        nums.sort((a, b) => b.toString().localeCompare(a.toString()));
    }
    var x = 0;
    while (nums[x + 1] != '_' && count != 0) {
        if (nums[x] > nums[x + 1]) {
            var temp = nums[x];
            nums[x] = nums[x + 1];
            nums[x + 1] = temp;
            x = 0;
        } else { x++; }
    }
    return nums.length - count;
};

console.log(removeDuplicates([1, 1, 2]));
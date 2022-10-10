/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    var missing, duplicate;
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.get(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);
    }
    console.log(map);
    for (let i = 0; i < nums.length; i++) {
        console.log(i);
        if (map.get(i + 1) === 2) {
            duplicate = i + 1;
        } else if (!map.get(i + 1)) {
            missing = i + 1;
        }
    }

    return [duplicate, missing];
};

console.log(findErrorNums([1, 2, 2, 4]));
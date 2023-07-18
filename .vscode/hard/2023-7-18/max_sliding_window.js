/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var maxSlidingWindow = function (nums, k) {
    var maxs = [];
    var lastMaxIndex = -1;

    for (let i = 0; i <= nums.length - k; i++) {
        var thisMaxIndex = lastMaxIndex !== -1 ? lastMaxIndex : 0;
        var reloop = false;
        if (lastMaxIndex !== -1 && lastMaxIndex < i) { lastMaxIndex = i; thisMaxIndex = i; reloop = true; }


        if (lastMaxIndex === -1 || reloop)
            for (let j = i; j < i + k; j++) { if (nums[thisMaxIndex] <= nums[j]) thisMaxIndex = j; }

        else if (nums[thisMaxIndex] <= nums[i + k - 1]) thisMaxIndex = i + k - 1;

        lastMaxIndex = thisMaxIndex;
        maxs.push(nums[thisMaxIndex]);
    };
    return maxs;
}

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1], 1));
// console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    let set = new Set();
    nums.forEach(n => set.add(n));
    console.log(set);
    var max = 0, c = 1;
    // sortedArr.reduce((prev, curr) => {
    //     if (prev + 1 === curr) {
    //         c++;
    //     } else {
    //         if (c > max) { max = c; }
    //         c = 1;
    //     }
    //     return curr;
    // });
    // if (c > max) { max = c; }

    return max;
};
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
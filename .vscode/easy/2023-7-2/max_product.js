/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    var max = nums.slice(0, 3);
    var negatives = [0, 0, 0];
    max.sort((a, b) => b - a);
    nums.forEach(n => {
        if (n < 0) {
            negatives.push(n);
        }
    });
    nums.slice(3).forEach(n => {
        if (max[2] < n) {
            max[2] = n;
            max.sort((a, b) => b - a);
        }
    });
    negatives.sort((a, b) => a - b);
    console.log(negatives);
    return Math.max(max[0] * max[1] * max[2], max[0] * negatives[0] * negatives[1]);
};

// console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
console.log(maximumProduct([1, 2, 3]));
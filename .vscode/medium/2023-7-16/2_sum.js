/**
 * @param {number[]} numbers
 * @param {number} target
 * @param {number} s
 * @param {number} e
 * @return {number}
 */

var binarySearch = function (numbers, target, s, e) {
    var start = s, end = e;
    var mid = Math.ceil((e + s) / 2);
    while (start <= end) {
        if (numbers[mid] === target) return mid;
        else if (numbers[mid] > target) end = mid - 1;
        else start = mid + 1;
        mid = Math.ceil((start + end) / 2);
    }
    return -1;
}
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        var bSRes = binarySearch(numbers, target - numbers[i], i + 1, numbers.length - 1);
        if (bSRes !== -1 && bSRes !== i) return [i + 1, bSRes + 1].sort((a, b) => a - b);
    }
}; 
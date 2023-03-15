/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    var map = new Map();
    var nums = num.split('');
    nums.forEach(n => {
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
    });
    var equal = true;
    for (let i = 0; i < nums.length; i++) {
        var right = map.get(i.toString()) ? map.get(i.toString()) : 0;
        console.log(i, right);
        if (nums[i] != right) {
            equal = false;
        }
    }
    console.log(map);
    return equal;
};
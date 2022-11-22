/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    var map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) + 1 : 1);
    }
    console.log(map);
    var res = -1;
    map.forEach((v, k) => {
        if (v === k && v > res) {
            res = v;
        }
    })
    return res;
};

console.log(findLucky([1, 2, 2, 3, 3, 3]));
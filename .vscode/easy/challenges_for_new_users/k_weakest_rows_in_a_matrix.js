/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    var map = new Map();
    for (let i = 0; i < mat.length; i++) {
        map.set(i, mat[i].filter((x) => x === 1).length);
    }
    var res = [];
    for (let i = 0; i < k; i++) {
        var minIndex = 0, minVal = 101;

        map.forEach((value, key, m) => {
            if (value < minVal) {
                minIndex = key; minVal = value;
            }
        });
        res.push(minIndex);
        map.set(minIndex, 101);
    }
    return res;
};
console.log(kWeakestRows([[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]], 3));
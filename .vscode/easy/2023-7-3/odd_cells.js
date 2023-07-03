/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    var matrix = [];

    for (let i = 0; i < m; i++) {
        var arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(0);
        }
        matrix.push(arr);
    }

    for (let i = 0; i < indices.length; i++) {
        for (let x = 0; x < n; x++) {
            matrix[indices[i][0]][x]++;
        } for (let x = 0; x < m; x++) {
            matrix[x][indices[i][1]]++;
        }
    }

    var res = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] % 2 !== 0) res++;
        }
    }
    return res;
};

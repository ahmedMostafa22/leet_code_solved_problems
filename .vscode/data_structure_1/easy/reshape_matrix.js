/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (r * c !== mat.length * mat[0].length) {
        return mat;
    }

    var numbers = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            numbers.push(mat[i][j]);
        }
    }

    var res = [];
    for (let i = 0; i < r; i++) {
        var row = [];
        for (let j = 0; j < c; j++) {
            console.log(i * c + j);
            row.push(numbers[i * c + j]);
        }
        res.push(row);
    }

    return res;
};

console.log(matrixReshape([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]], 3, 4));
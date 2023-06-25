/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var pos = [];
    if (matrix[0][0] > target || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
        return false;
    }
    var i = 0, j = 0;
    while (i < matrix.length || j < matrix[0].length) {
        console.log(i, j);
        if (target <= matrix[i][j]) {
            pos = [i, j];
            for (let k = pos[0]; k >= 0; k--) {
                if (target === matrix[k][pos[1]]) {
                    return true;
                }
            }

            for (let k = pos[1]; k >= 0; k--) {
                if (target === matrix[pos[0]][k]) {
                    return true;
                }
            }
        }
        if (i === matrix.length - 1 && j === matrix[0].length - 1)
            break;
        if (i < matrix.length - 1) i++;
        if (j < matrix[0].length - 1) j++;

    }
    return false;
};

// console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));
// console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20));
// console.log(searchMatrix([[-1, 3]], 3));
console.log(searchMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 15));
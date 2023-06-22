/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let i = 0; i < parseInt((matrix.length) / 2); i++) {
        var leftCol = [];
        var rightCol = [];
        var bottomRow = [];
        var topRow = [];

        for (let j = 0; j < matrix.length; j++) {
            leftCol.push(matrix[j][i]);
            topRow.push(matrix[i][j]);
            rightCol.push(matrix[j][matrix.length - i - 1]);
            bottomRow.push(matrix[matrix.length - i - 1][j]);
        }
        console.log(topRow, bottomRow, leftCol, rightCol);
        for (let j = i; j < matrix.length - i; j++) {
            matrix[matrix.length - i - 1][j] = rightCol[matrix.length - j - 1];
            matrix[j][matrix.length - i - 1] = topRow[j];
            matrix[j][i] = bottomRow[j];
            matrix[i][j] = leftCol[matrix.length - 1 - j];
        }
        console.log(matrix);

    }

};

// rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
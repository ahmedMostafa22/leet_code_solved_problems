/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var zerosLocations = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zerosLocations.push([i, j]);
            }
        }
    }
    for (let i = 0; i < zerosLocations.length; i++) {
        for (let x = 0; x < matrix.length; x++) {
            matrix[x][zerosLocations[i][1]] = 0;
        }

        for (let y = 0; y < matrix[0].length; y++) {
            matrix[zerosLocations[i][0]][y] = 0;
        }
    }
    return matrix;
};

// console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
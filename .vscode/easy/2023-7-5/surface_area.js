/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    var area = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0)
                continue;
            var cubearea = 0;
            var countedSides = 0;

            if (i === 0 || grid[i - 1][j] === 0) countedSides++; else if (grid[i - 1][j] < grid[i][j]) cubearea += Math.abs(grid[i][j] - grid[i - 1][j]);
            if (i === grid.length - 1 || grid[i + 1][j] === 0) countedSides++; else if (grid[i + 1][j] < grid[i][j]) cubearea += Math.abs(grid[i][j] - grid[i + 1][j]);
            if (j === 0 || grid[i][j - 1] === 0) countedSides++; else if (grid[i][j - 1] < grid[i][j]) cubearea += Math.abs(grid[i][j] - grid[i][j - 1]);
            if (j === grid[0].length - 1 || grid[i][j + 1] === 0) countedSides++; else if (grid[i][j + 1] < grid[i][j]) cubearea += Math.abs(grid[i][j] - grid[i][j + 1]);

            cubearea += (grid[i][j] * countedSides) + (grid[i][j] === 0 ? 1 : 2);
            area += cubearea;
        }
    }
    return area;
};

// console.log(surfaceArea([[1, 2], [3, 4]]));
// console.log(surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]));
// console.log(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
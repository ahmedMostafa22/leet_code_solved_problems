/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    var rows = [], columns = [];
    var ans = 0;

    for (let i = 0; i < grid.length; i++) {
        var row = '', column = '';
        for (let j = 0; j < grid.length; j++) {
            row += grid[i][j].toString() + ',';
            column += grid[j][i].toString() + ',';
        }
        columns.push(column);
        rows.push(row);
    }
    // console.log(rows, columns);

    for (let i = 0; i < rows.length; i++)
        for (let j = 0; j < columns.length; j++)
            if (rows[i] === columns[j]) ans++;

    return ans;
};

// console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]));
// console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));
// console.log(equalPairs([[11, 1], [1, 11]]));
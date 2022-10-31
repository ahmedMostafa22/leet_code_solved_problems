/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    var res = 0;
    var hasLand = false, hasWater = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            var cell = grid[i][j];
            if (cell === 0) { hasWater = true; }
            if (cell === 1) { hasLand = true; }
            if (cell !== 0) { continue; }
            console.log('Checking... cell ' + i.toString() + ' ' + j.toString());

            var cellMaxDistance = -1;
            //up check
            for (let a = i; a >= 0; a--) {
                if (grid[a][j] === 0) {
                    cellMaxDistance++;
                } else { break; }
            }
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;

            //left check
            for (let a = j; a >= 0; a--) {
                if (grid[i][a] === 0) {
                    cellMaxDistance++;
                } else { break; }
            }
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;

            //down check
            for (let a = i; a < grid.length; a++) {
                if (grid[a][j] === 0) {
                    cellMaxDistance++;
                } else { break; }
            }
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;

            //right check
            for (let a = j; a < grid[i].length; a++) {
                if (grid[i][a] === 0) {
                    cellMaxDistance++;
                } else { break; }
            }
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;

            //up-left check
            var a = i, b = j;
            while (a >= 0 && b >= 0) {
                if (grid[a][b] === 0) {
                    cellMaxDistance++;
                    a--; b--;
                } else { break; }
            }
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;

            //down-right check
            var a = i, b = j;
            while (a < grid.length && b < grid.length) {
                if (grid[a][b] === 0) {
                    cellMaxDistance++;
                    a++; b++;
                } else { break; }
            }
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;

            //up-right check
            var a = i, b = j;
            while (a >= 0 && b < grid.length) {
                if (grid[a][b] === 0) {
                    cellMaxDistance++;
                    a--; b++;
                } else { break; }
            }
            console.log('up-right check distance ' + cellMaxDistance.toString());
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;



            //down-left check
            var a = i, b = j;
            while (a < grid.length && b >= 0) {
                if (grid[a][b] === 0) {
                    cellMaxDistance++;
                    a++; b--;
                } else { break; }
            }
            console.log('down-left check distance ' + cellMaxDistance.toString());
            if (cellMaxDistance > res) {
                res = cellMaxDistance;
            }
            cellMaxDistance = -1;
        }
    }

    return hasLand && hasWater ? res : -1;
}

console.log(maxDistance(
    [[1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]]));
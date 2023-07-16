/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    var ans = 0;
    var islands = new Map();
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    islands.forEach((v, k) => {
                        if (v.findIndex(p => p[0] === i - 1 && p[1] === j) !== -1) islands.set(k, v.concat([[i, j]]));
                    });
                } else if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                    islands.forEach((v, k) => {
                        if (v.findIndex(p => p[0] === i && p[1] === j - 1) !== -1) islands.set(k, v.concat([[i, j]]));
                    });
                }
                else islands.set(islands.size, [[i, j]]);
            }
        }

    var islandsArr = [];
    islands.forEach((v, k) => islandsArr.push(v));
    var matches = [];
    for (let i = 0; i < islandsArr.length - 1; i++)
        for (let j = i + 1; j < islandsArr.length; j++) {
            var matched = false;
            for (let x = 0; x < islandsArr[i].length; x++) {
                for (let y = 0; y < islandsArr[j].length; y++) {
                    if ((Math.abs(islandsArr[i][x][0] - islandsArr[j][y][0]) === 1 && islandsArr[i][x][1] === islandsArr[j][y][1])
                        || (islandsArr[i][x][0] === islandsArr[j][y][0] && Math.abs(islandsArr[i][x][1] - islandsArr[j][y][1]) === 1)) {
                        matches.push([i, j]); matched = true; break;
                    }
                }
                if (matched) break;
            }
        }
    while (true) {
        var c = 0;
        for (let x = 0; x < matches.length; x++) {
            for (let z = 0; z < matches.length; z++) {
                if (x != z)
                    for (let i = 0; i < matches[z].length; i++) {
                        if (matches[x].findIndex(n => n === matches[z][i]) !== -1) {
                            matches[z].forEach(n => {
                                if (matches[x].findIndex(a => a === n) === -1) matches[x].push(n);
                            });
                            matches[z] = [];
                            c++;
                            break;
                        }
                    }
            }
        }
        if (c === 0) break;
    }
    // console.log(matches.filter(m => m.length > 0));
    for (let i = 0; i < islandsArr.length; i++) {
        if (islandsArr[i].length > ans) ans = islandsArr[i].length;
    }
    for (let i = 0; i < matches.length; i++) {
        var area = 0;
        for (let j = 0; j < matches[i].length; j++)area += islandsArr[matches[i][j]].length
        if (area > ans) ans = area;
    }
    console.log(matches);
    return ans;
};

// console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));
//console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
// console.log(maxAreaOfIsland([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]));
console.log(maxAreaOfIsland([
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1]]));
// console.log(maxAreaOfIsland(
//     [[1, 1, 0, 1, 0, 0, 1, 1],
//     [0, 1, 0, 1, 1, 1, 1, 0],
//     [1, 1, 1, 1, 0, 0, 0, 1]]));


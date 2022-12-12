/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    var rookPos;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                rookPos = [i, j];
            }
        }
    }
    var res = 0;
    for (let i = rookPos[0]; i < 8; i++) {
        if (board[i][rookPos[1]] === 'p') { res++; break; }
        else if (board[i][rookPos[1]] === 'B') { break; }
    }
    for (let i = rookPos[0]; i >= 0; i--) {
        if (board[i][rookPos[1]] === 'p') { res++; break; }
        else if (board[i][rookPos[1]] === 'B') { break; }
    }
    for (let i = rookPos[1]; i < 8; i++) {
        if (board[rookPos[0]][i] === 'p') { res++; break; }
        else if (board[rookPos[0]][i] === 'B') { break; }
    }
    for (let i = rookPos[1]; i >= 0; i--) {
        if (board[rookPos[0]][i] === 'p') { res++; break; }
        else if (board[rookPos[0]][i] === 'B') { break; }
    }
    return res;
};

console.log(numRookCaptures([[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]));
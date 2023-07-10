/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    var ships = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if ((board[i][j] === 'X' && (i + 1 > board.length - 1 || board[i + 1][j] === '.') && (j + 1 > board[0].length - 1 || board[i][j + 1] === '.') && (j - 1 < 0 || board[i][j - 1] === '.'))
                || (board[i][j] === 'X' && (i + 1 > board.length - 1 || board[i + 1][j] === '.') && (j + 1 > board[0].length - 1 || board[i][j + 1] === '.') && (i - 1 < 0 || board[i - 1][j] === '.')))
                ships++;
        }
    }
    return ships;
};  
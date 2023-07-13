/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    var ans = [];
    var top = true, bot = true, left = true, right = true, topRight = true, topLeft = true, botRight = true, botLeft = true;

    var board = Array(8).fill().map(() => Array(8).fill('X'));
    board[king[0]][king[1]] = 'K';

    for (let i = 0; i < queens.length; i++) board[queens[i][0]][queens[i][1]] = 'Q';

    for (let i = 1; i < 8; i++) {
        //top
        if (top && king[0] - i >= 0 && board[king[0] - i][king[1]] === 'Q') { top = false; ans.push([king[0] - i, king[1]]); }

        //bot
        if (bot && king[0] + i < 8 && board[king[0] + i][king[1]] === 'Q') { bot = false; ans.push([king[0] + i, king[1]]); }

        //left
        if (left && king[1] - i >= 0 && board[king[0]][king[1] - i] === 'Q') { left = false; ans.push([king[0], king[1] - i]); }

        //left
        if (right && king[1] + i < 8 && board[king[0]][king[1] + i] === 'Q') { right = false; ans.push([king[0], king[1] + i]); }

        //top right
        if (topRight && king[0] - i >= 0 && king[1] + i < 8 && board[king[0] - i][king[1] + i] === 'Q') { topRight = false; ans.push([king[0] - i, king[1] + i]); }

        //bot right
        if (botRight && king[0] + i < 8 && king[1] + i < 8 && board[king[0] + i][king[1] + i] === 'Q') { botRight = false; ans.push([king[0] + i, king[1] + i]); }

        //bot left
        if (botLeft && king[0] + i < 8 && king[0] - i < 8 && board[king[0] + i][king[1] - i] === 'Q') { botLeft = false; ans.push([king[0] + i, king[1] - i]); }

        //top left
        if (topLeft && king[0] - i >= 0 && king[1] - i >= 0 && board[king[0] - i][king[1] - i] === 'Q') { topLeft = false; ans.push([king[0] - i, king[1] - i]); }
    }

    return ans;
};
// console.log(queensAttacktheKing([[0, 1], [1, 0], [3, 3]], [0, 0]));
// console.log(queensAttacktheKing([[0, 0], [1, 1], [2, 2], [3, 4], [3, 5], [4, 4], [4, 5]], [3, 3])); 
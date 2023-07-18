/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    var ans = [];
    for (let i = 0; i < boxes.length; i++) {
        var moves = 0;
        for (let j = 0; j < boxes.length; j++)
            if (i !== j && boxes[j] === '1') moves += Math.abs(i - j);

        ans.push(moves);
    }
    return ans;
};

// console.log(minOperations("1"));
// console.log(minOperations("110"));
// console.log(minOperations("001011"));
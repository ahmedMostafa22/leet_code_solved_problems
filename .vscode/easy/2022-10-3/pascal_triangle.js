/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        var innerArr = [];
        for (var j = 0; j <= i; j++) {
            var num = 0;
            if (result[i - 1] && result[i - 1][j]) {
                num += result[i - 1][j];
            }
            if (result[i - 1] && result[i - 1][j - 1]) {
                num += result[i - 1][j - 1];
            }
            innerArr.push(num);
        }
        if (i == 0) { innerArr = [1]; }
        console.log(innerArr)
        result.push(innerArr);
    }
    return result;
};

generate(1);
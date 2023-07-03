/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var matrix = [];
    for (let j = 0; j < wordDict.length; j++) {
        var arr = Array(s.length).fill(1);
        var i = 0;
        while (s.substring(i).includes(wordDict[j])) {
            i = s.indexOf(wordDict[j]);
            for (let z = i; z < i + wordDict[j].length; z++) {
                arr[z] = 0;
            }
            i += wordDict[j].length;
        }
        matrix.push(arr);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1 && j === 0) break;
            else if (matrix[i][j] === 1) {
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] === 0 && matrix[k][j - 1] === 1) {
                        i = k;
                        break;
                    }
                }
            } else if (matrix[i][j] === 0 && j === s.length - 1) {
                return true;
            }
        }
    }

    return false;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
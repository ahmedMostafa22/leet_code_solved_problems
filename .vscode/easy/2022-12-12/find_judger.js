/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    var trustedBy = new Map();
    var trusts = new Map();
    for (let i = 0; i < n; i++) {
        trustedBy.set(i + 1, 0);
        trusts.set(i + 1, 0);
    }
    for (let i = 0; i < trust.length; i++) {
        trustedBy.set(trust[i][1], trustedBy.get(trust[i][1]) + 1);
        trusts.set(trust[i][0], trusts.get(trust[i][0]) + 1);
    }
    var judge = -1
    for (let i = 0; i < trustedBy.size; i++) {
        if (trustedBy.get(i + 1) === n - 1 && trusts.get(i + 1) === 0) {
            judge = i + 1;
            break;
        }
    }
    console.log(trusts);
    console.log(trustedBy);
    return judge;
};

console.log(findJudge(3, [[1, 3], [2, 3]]));
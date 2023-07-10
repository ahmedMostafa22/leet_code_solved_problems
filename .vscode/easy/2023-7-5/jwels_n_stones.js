/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    var jews = jewels.split('');
    var res = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jews.includes(stones[i]))
            res++;
    }
    return res;
};
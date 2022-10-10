/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    console.log(g.sort());
    console.log(s.sort());
    console.log(g.sort((a, b) => a - b));
    console.log(s.sort((a, b) => a - b));
    var res = 0;
    for (let i = 0; i < g.length; i++) {
        var index = s.findIndex((e) => e >= g[i]);
        if (index != -1) {
            res++;
            s[index] = -1;
        }
    }
    return res;
};

console.log(findContentChildren([1, 2, 3, 10, 3, 2, 1], [1, 2, 3, -1]));
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    var tDiffs = 0, sDiffs = 0;
    var sMap = new Map(), tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
        tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1);
    }
    // console.log(sMap, tMap);

    sMap.forEach((v, k) => {
        var tVal = 0;
        if (tMap.get(k))
            tVal = tMap.get(k);
        if (tVal > v) tDiffs += tVal - v;
        else sDiffs += v - tVal;
    });

    // console.log(sDiffs, tDiffs);

    return Math.abs(sDiffs - tDiffs) + Math.min(sDiffs, tDiffs);
};
// console.log(minSteps("bab", "aba"));
// console.log(minSteps("leetcode", "practice"));
// console.log(minSteps("anagram", "mangaar"));
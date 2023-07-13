/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
    var ans = 0;
    var sSubs = [], tSubs = [];

    for (let i = 1; i <= s.length; i++)
        for (let j = 0; j < s.length; j++) {
            var sub = s.substring(j, j + i);
            if (sub.length === i)
                sSubs.push(s.substring(j, j + i))
        }

    for (let i = 1; i <= t.length; i++)
        for (let j = 0; j < t.length; j++) {
            var sub = t.substring(j, j + i);
            if (sub.length === i)
                tSubs.push(t.substring(j, j + i))
        }

    for (let i = 0; i < sSubs.length; i++)
        for (let j = 0; j < tSubs.length; j++)
            if (sSubs[i].length === tSubs[j].length && checkExactlyOneDiff(tSubs[j], sSubs[i]))
                ans++;

    return ans;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {bool}
 */
var checkExactlyOneDiff = function (s, t) {
    var diffs = 0;
    for (let i = 0; i < Math.min(s.length, t.length); i++)
        if (s[i] !== t[i]) diffs++
    return diffs === 1;
}

// console.log(countSubstrings("aba", "baba"));
// console.log(countSubstrings("ab", "bb"));

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    var res = [];
    for (let i = 0; i < s.length; i++) {
        var current = '';
        current += s[i];
        for (let j = 0; j < current.length; j++) {
            if (s.substring(i + 1).includes(current[j])) {
                current += s.substring(i + 1, s.lastIndexOf(current[j]) + 1);
                i = s.lastIndexOf(current[j]);
            }
        }
        res.push(current);
    }
    return res.map(s => s.length);
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
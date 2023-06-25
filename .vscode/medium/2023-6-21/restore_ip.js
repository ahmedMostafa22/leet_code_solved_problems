/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    var length = s.length;
    var res = [];
    if (s.length < 4 || s.length > 12)
        return [];

    for (let i = 1; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                var first = s.substring(0, i);
                var second = s.substring(i, j);
                var third = s.substring(j, k);
                var fourth = s.substring(k);

                if (first.length > 3 || second.length > 3 || third.length > 3 || fourth.length > 3) {
                    continue;
                }

                if ((first[0] === '0' && first.length > 1) || (second[0] === '0' && second.length > 1) || (third[0] === '0' && third.length > 1) || (fourth[0] === '0' && fourth.length > 1) || parseInt(first) < 0 ||
                    parseInt(first) > 255 || parseInt(second) < 0 || parseInt(second) > 255 || parseInt(third) < 0 ||
                    parseInt(third) > 255 || parseInt(fourth) < 0 || parseInt(fourth) > 255) {
                    continue;
                }

                address = first + '.' + second + '.' + third + '.' + fourth;
                res.push(address);
            }
        }

    }
    return res;
};

// console.log(restoreIpAddresses("0000"));
// console.log(restoreIpAddresses("25525511135"));
// console.log(restoreIpAddresses("101023"));
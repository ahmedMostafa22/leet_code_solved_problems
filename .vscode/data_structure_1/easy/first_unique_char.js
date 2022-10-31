/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
    }
    var char = '';
    map.forEach((val, key) => {
        if (val === 1 && char === '') {
            char = key;
        }
    });
    return char === '' ? -1 : s.indexOf(char);
};

console.log(firstUniqChar('lleettccooddee'));
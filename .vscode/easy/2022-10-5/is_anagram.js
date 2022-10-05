/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var map1 = new Map(), map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        map1.set(s[i], map1[i] ? map1[i] + 1 : 1);
    }
    for (let i = 0; i < t.length; i++) {
        map2.set(t[i], map2[i] ? map2[i] + 1 : 1);
    }

    let keys1 = Array.from(map1.keys());
    let keys2 = Array.from(map2.keys());
    keys1.sort((a, b) => -1);
    keys2.sort((a, b) => -1);
    console.log(keys1);
    console.log(keys2);
    for (let i = 0; i < keys1.length; i++) {
        console.log(map1.get(keys1[i]) + '  ' + map2.get(keys2[i]));
        if (map1.get(keys1[i]) !== map2.get(keys2[i]) || keys1[i] !== keys2[i]) {
            return false;
        }
    }
    return true;


};

console.log(isAnagram("anagram", "nagaram"));
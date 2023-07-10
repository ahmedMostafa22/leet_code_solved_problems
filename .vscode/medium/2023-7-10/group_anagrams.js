/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var maps = [];
    for (let i = 0; i < strs.length; i++) {
        var map = new Map();

        for (let j = 0; j < strs[i].length; j++)
            map.set(strs[i][j], map.has(strs[i][j]) ? map.get(strs[i][j]) + 1 : 1);

        maps.push([map, true]);
    }

    var groups = [];

    for (let i = 0; i < maps.length; i++) {
        if (!maps[i][1]) continue;
        var group = [strs[i]];
        maps[i][1] = false;
        for (let j = i + 1; j < maps.length; j++) {
            if (!maps[j][1] || maps[i][0].size !== maps[j][0].size) continue;
            if (checkIfAnagram(maps[i][0], maps[j][0])) {
                group.push(strs[j]);
                maps[j][1] = false;
            }
        }
        groups.push(group);
    }
    return groups;
};

/**
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 */

var checkIfAnagram = function (map1, map2) {
    var anagram = true;
    map1.forEach((v, k) => {
        if (map2.get(k) !== v) { anagram = false; }
    });
    return anagram;
};
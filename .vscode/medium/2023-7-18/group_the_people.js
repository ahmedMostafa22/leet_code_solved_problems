/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    var groups = [];

    for (let i = 0; i < groupSizes.length; i++) {
        var inserted = false;
        for (let j = 0; j < groups.length; j++) {
            if (groupSizes[groups[j][0]] === groupSizes[i] && groupSizes[i] > groups[j].length) { groups[j].push(i); inserted = true; break; }
        }
        if (!inserted) groups.push([i]);
    }
    return groups;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
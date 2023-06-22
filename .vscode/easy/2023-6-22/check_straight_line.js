/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    var diffX = coordinates[1][0] - coordinates[0][0];
    var diffY = coordinates[1][1] - coordinates[0][1];
    for (let i = 0; i < coordinates.length - 1; i++) {
        var point = coordinates[i];
        var nextPoint = coordinates[i + 1];
        if (diffX * (point[1] - nextPoint[1]) !== diffY * (point[0] - nextPoint[0])) {
            return false;
        }
    }
    return true;
};

console.log(checkStraightLine([[0, 0], [0, 1], [0, -1]]));
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    var largestAltitude = 0;
    var accAlt = 0;
    for (let i = 0; i < gain.length; i++) {
        accAlt += gain[i];
        if (accAlt > largestAltitude) {
            largestAltitude = accAlt;
        }
    }
    return largestAltitude;
};
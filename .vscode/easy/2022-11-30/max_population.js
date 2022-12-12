/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    var year = 1950, max = 0, maxYear = -1;

    for (let i = year; i <= 2050; i++) {
        var currentPop = 0;
        for (let j = 0; j < logs.length; j++) {
            if (i >= logs[j][0] && i < logs[j][1]) {
                currentPop++;
            }
        }
        if (currentPop > max) {
            max = currentPop;
            maxYear = i;
        }
    }

    return maxYear;
};
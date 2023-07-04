/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    var result = 0;
    for (let i = 0; i < bank.length - 1; i++) {
        var row = bank[i].split('');
        var laser = row.filter(l => l === '1').length;
        if (laser != 0) {
            console.log(laser);
            for (let j = i + 1; j < bank.length; j++) {
                var secondRow = bank[j].split('');
                var secondLaser = secondRow.filter(l => l === '1').length;
                if (secondLaser != 0) { result += laser * secondLaser; break; }
            }
        }
    }
    return result;
};

// console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));
// console.log(numberOfBeams(["000", "111", "000"]));
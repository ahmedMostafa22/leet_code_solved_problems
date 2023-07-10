var UndergroundSystem = function () {
    this.records = [];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.records.push([id, stationName, 'IN', t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    this.records.push([id, stationName, 'OUT', t]);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    var times = 0, count = 0;
    for (let i = 0; i < this.records.length; i++)
        if (this.records[i][2] === 'IN' && this.records[i][1] === startStation)
            for (let j = i + 1; j < this.records.length; j++){
                if (this.records[j][0] === this.records[i][0] && this.records[j][1] !== endStation) break;
                
                if (this.records[j][2] === 'OUT' && this.records[j][1] === endStation && this.records[j][0] === this.records[i][0]) {
                    times += this.records[j][3] - this.records[i][3];
                    count++;
                }
    }
    return times / count;
};


/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    var steps = 1;
    var currentCapacity = capacity - plants[0];
    for (let i = 1; i < plants.length; i++) {
        if (currentCapacity >= plants[i]) {
            steps++;
            currentCapacity -= plants[i];
        } else {
            currentCapacity = capacity - plants[i];
            steps += (i * 2) + 1;
        }
    }
    return steps;
};

// console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8));
// console.log(wateringPlants([2, 2, 3, 3], 5));
// console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4));
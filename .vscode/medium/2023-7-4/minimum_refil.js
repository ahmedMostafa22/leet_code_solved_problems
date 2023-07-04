/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
    var refills = 0;
    var a = 0, b = plants.length - 1;
    var currectCapA = capacityA;
    var currectCapB = capacityB;
    while (a <= b) {
        if (a === b) {
            if (Math.max(currectCapA, currectCapB) >= plants[a]) a++;
            else { refills++; a++; }
            break;
        } else {
            if (currectCapA < plants[a]) {
                currectCapA = capacityA;
                refills++;
            }
            currectCapA -= plants[a];
            a++;

            if (currectCapB < plants[b]) {
                currectCapB = capacityB;
                refills++;
            }
            currectCapB -= plants[b];
            b--;
        }
    }
    return refills;
};
// console.log(minimumRefill([2, 2, 3, 3], 5, 5));
// console.log(minimumRefill([2, 2, 3, 3], 3, 4));
// console.log(minimumRefill([5], 10, 8));
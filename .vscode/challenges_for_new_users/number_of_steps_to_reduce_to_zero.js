/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    var res = 0;
    while (num != 0) {
        num % 2 === 0 ? num /= 2 : num--;
        res++;
    }
    return res;
};

console.log(numberOfSteps(123));
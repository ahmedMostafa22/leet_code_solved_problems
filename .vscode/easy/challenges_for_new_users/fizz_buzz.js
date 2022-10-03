/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var result = [];
    for (let i = 1; i <= n; i++) {
        var item = '';
        if (i % 3 === 0) {
            item += 'Fizz';
        } if (i % 5 === 0) {
            item += 'Buzz';
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            item = i.toString();
        }
        result.push(item);
    }
    return result;
};

console.log(fizzBuzz(15));
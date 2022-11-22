/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var chars = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    var res = '';

    while (num != 0) {
        for (let i = 0; i < numbers.length; i++) {
            if (num >= numbers[i] && (i === numbers.length - 1 || num < numbers[i + 1])) {
                num -= numbers[i];
                res += chars[i];
                break;
            }

        }
    }
    return res;
};

console.log(intToRoman(58));
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var len = digits.length;
    var map = new Map();

    map.set(2, ['a', 'b', 'c']);
    map.set(3, ['d', 'e', 'f']);
    map.set(4, ['g', 'h', 'i']);
    map.set(5, ['j', 'k', 'l']);
    map.set(6, ['m', 'n', 'o']);
    map.set(7, ['p', 'q', 'r', 's']);
    map.set(8, ['t', 'u', 'v']);
    map.set(9, ['w', 'x', 'y', 'z']);

    var result = [];

    if (len === 0) return [];
    for (let i = 0; i < map.get(parseInt(digits[0])).length; i++) {
        var first = map.get(parseInt(digits[0]))[i];
        if (len === 1)
            result.push(first);
        else for (let j = 0; j < map.get(parseInt(digits[1])).length; j++) {
            var second = map.get(parseInt(digits[1]))[j];
            if (len === 2)
                result.push(first + second);
            else for (let k = 0; k < map.get(parseInt(digits[2])).length; k++) {
                var third = map.get(parseInt(digits[2]))[k];
                if (len === 3)
                    result.push(first + second + third);
                else for (let l = 0; l < map.get(parseInt(digits[3])).length; l++) {
                    var fourth = map.get(parseInt(digits[3]))[l];
                    if (len === 4)
                        result.push(first + second + third + fourth);
                }
            }
        }
    }
    return result;
};

// console.log(letterCombinations("2"));
// console.log(letterCombinations("23"));
// console.log(letterCombinations("234"));
// console.log(letterCombinations("2345"));
// console.log(letterCombinations(""));
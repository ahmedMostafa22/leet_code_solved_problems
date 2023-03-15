/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    var alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var map = new Map();
    var i = 0;
    key.split('').forEach(c => {
        if (!map.has(c) && c !== ' ') {
            map.set(c, alphas[i]);
            i++;
        }
    });
    console.log(map);
    var result = '';

    message.split('').forEach(c => {
        if (c === ' ') {
            result += ' ';
        } else {
            result += map.get(c);
        }
    });
    return result;
};
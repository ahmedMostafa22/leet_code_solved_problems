/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var xBinary = '', yBinary = '';
    for (let i = 1; x > 0; i++) {
        var num = Math.floor(Math.log2(x));
        console.log(num + '  ' + i);
        if (num > 0) {
            xBinary += '1';
            x -= num;
        } else {
            xBinary += '0';
        }
    }
    console.log(xBinary);
    // for (let i = 0; y > 0; i++) {
    //     var num = Math.floor(Math.log2(y));
    //     console.log(y);
    //     yBinary += y - num >= 0 ? '1' : '0';
    //     y -= Math.pow(2, num);
    // }
    // console.log(xBinary);
    // console.log(yBinary);
};
hammingDistance(10, 5);
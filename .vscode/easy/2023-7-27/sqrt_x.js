/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0;
    var s = 1, e = x;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        var mid2 = mid * mid;
        if (mid2 === x) return mid
        else if ((mid2 > x && ((mid - 1) * (mid - 1)) < x)) return mid - 1;
        else if ((mid2 < x && ((mid + 1) * (mid + 1)) > x)) return mid;
        else if (mid2 > x) e = mid - 1;
        else s = mid + 1;
        mid = Math.floor((s + e) / 2);
    }
};
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(7));
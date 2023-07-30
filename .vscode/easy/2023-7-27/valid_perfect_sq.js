/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    var s = 1, e = num;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        // console.log(mid);
        var mid2 = mid * mid;
        if (mid2 === num) return true;
        else if (mid2 > num) e = mid - 1;
        else s = mid + 1;
        mid = Math.floor((s + e) / 2);
    }
    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(1));
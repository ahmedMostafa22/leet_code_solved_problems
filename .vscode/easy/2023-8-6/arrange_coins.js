/**
 * @param {number} n
 * @return {number}
 */
var bs = function (n) {
    var s = 0, e = n;
    var mid;
    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        var slots = (mid * (mid + 1)) / 2;
        var slotsMinus = (mid * (mid - 1)) / 2;
        if (slots === n) return mid;
        else if (slotsMinus < n && slots > n) return mid - 1;
        else if (slots < n) s = mid + 1;
        else if (slots > n) e = mid - 1;
    }
};

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    return bs(n);
};
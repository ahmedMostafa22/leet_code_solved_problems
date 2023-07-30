/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    var s = 1, e = n;
    var mid = Math.floor(e / 2);

    while (true) {
        if (guess(mid) === 0) return mid;
        else if (guess(mid) === -1) e = mid - 1;
        else s = mid + 1;
        mid = Math.floor((s + e) / 2);
    }
};
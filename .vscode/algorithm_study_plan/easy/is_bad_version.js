/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var start = 1, end = n;
        var mid = Math.floor(n / 2);

        while (start <= end) {
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid;
            } else if (!isBadVersion(mid)) {
                start = mid + 1;
            } else if (isBadVersion(mid)) {
                end = mid - 1;
            }
            mid = Math.floor((end + start) / 2);
        }
    };
};

console.log(solution(5));
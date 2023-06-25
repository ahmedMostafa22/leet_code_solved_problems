/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    return !s.includes('LLL') && (s.split('A').length < 3);
};
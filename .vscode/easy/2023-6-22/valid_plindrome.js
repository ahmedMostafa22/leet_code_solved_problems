/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var word = '';
    s.split('').forEach(c => (c.toLowerCase() > 'a' && c.toLowerCase() < 'z') || (c.toLowerCase() > '0' && c.toLowerCase() < '9') || c.toLowerCase() === 'a' || c.toLowerCase() === '0' || c.toLowerCase() === '9' || c.toLowerCase() === 'z' ? word += c.toLowerCase() : {});
    console.log(word);
    return word === word.split('').reverse().join('');
};
console.log(isPalindrome("0p"))
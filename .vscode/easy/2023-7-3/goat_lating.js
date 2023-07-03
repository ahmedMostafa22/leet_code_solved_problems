/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (vowels.indexOf(words[i][0]) === -1) {
            words[i] = words[i].substring(1) + words[i][0];
        }
        words[i] += 'ma';
        for (let j = 0; j <= i; j++) {
            words[i] += 'a';
        }
    }
    return words.join(' ');
};
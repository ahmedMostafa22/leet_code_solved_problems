/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    var result = [];
    for (let i = 0; i < words.length; i++) {
        var mapping = new Map();
        var neverMatched = true;
        for (let j = 0; j < words[i].length; j++) {
            mapping.forEach((v, k) => {
                if (k !== words[i][j] && v == pattern[j]) neverMatched = false;
            });
            if (!neverMatched) {

            }
            if (!mapping.has(words[i][j])) {
                mapping.set(words[i][j], pattern[j]);
            } else if (mapping.get(words[i][j]) !== pattern[j]) {
                break;
            }
            if (j === words[i].length - 1) {
                result.push(words[i]);
            }
        }
    }
};
// console.log(findAndReplacePattern(["a", "b", "c"], "a"));
//console.log(findAndReplacePattern(["ktittgzawn", "dgphvfjniv", "gceqobzmis", "alrztxdlah", "jijuevoioe", "mawiizpkub", "onwpmnujos", "zszkptjgzj", "zwfvzhrucv", "isyaphcszn"], "zdqmjnczma"));
// console.log(findAndReplacePattern(["abc", "cba", "xyx", "yxx", "yyx"], "abc"));
// console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));


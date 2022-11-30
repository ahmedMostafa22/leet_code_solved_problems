/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var firstVal = '', secondVal = '', targetVal = '';
    for (let i = 0; i < firstWord.length; i++) {
        firstVal += alpha.indexOf(firstWord.charAt(i));
    }
    for (let i = 0; i < secondWord.length; i++) {
        secondVal += alpha.indexOf(secondWord.charAt(i));
    }
    for (let i = 0; i < targetWord.length; i++) {
        targetVal += alpha.indexOf(targetWord.charAt(i));
    }
    firstVal = parseInt(firstVal);
    secondVal = parseInt(secondVal);
    targetVal = parseInt(targetVal);

    console.log(firstVal + secondVal);
    console.log(targetVal);

    return firstVal + secondVal === targetVal;
};

console.log(isSumEqual("acb", "cba", "cdb"));
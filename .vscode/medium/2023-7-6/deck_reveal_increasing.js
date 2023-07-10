/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck = deck.sort((a, b) => a - b);
    var length = deck.length;
    var res = new Array(length).fill(0);

    var count = 0;
    var i = 0;
    var j = 0;
    while (i < length) {
        if (count === 0 && res[j] === 0) { res[j] = deck[i]; i++; j === length - 1 ? j = 0 : j++; count = 1; }
        else if (res[j] === 0) { count = 0; j === length - 1 ? j = 0 : j++; }
        else j === length - 1 ? j = 0 : j++;
    }
    return res;
};
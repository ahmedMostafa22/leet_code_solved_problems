/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    var typedOccurences = [];
    for (let i = 0; i < typed.length; i++) {
        var occurences = 1;
        for (let j = i; j < typed.length; j++) {
            if (typed[j] === typed[j + 1]) { occurences++; }
            else { i = j; typedOccurences.push([typed[j], occurences]); break; }
        }
    }

    var nameOccurences = [];
    for (let i = 0; i < name.length; i++) {
        var occurences = 1;
        for (let j = i; j < name.length; j++) {
            if (name[j] === name[j + 1]) { occurences++; }
            else { i = j; nameOccurences.push([name[j], occurences]); break; }
        }
    }
    if (nameOccurences.length !== typedOccurences.length) return false;
    for (let i = 0; i < nameOccurences.length; i++) {
        if (typedOccurences[i][0] !== nameOccurences[i][0] || typedOccurences[i][1] < nameOccurences[i][1]) {
            return false;
        }
    }
    return true;
};
console.log(isLongPressedName("leelee", "lleeelee"));
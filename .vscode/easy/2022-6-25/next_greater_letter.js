/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    var result = '؛';
    var found = false;

    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i], letters[i] > target, letters[i] < result, letters[i] !== target);
        if (letters[i] > target && letters[i] < result && letters[i] !== target) {
            result = letters[i];
            found = true;
        }
    }
    return found ? result : letters[0];
};

console.log(nextGreatestLetter(["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"], "k"));
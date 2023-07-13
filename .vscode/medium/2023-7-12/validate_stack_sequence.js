/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    var j = 0, i = 0;
    var s = [];
    while (i < pushed.length || j < popped.length) {
        if (i === pushed.length && popped[j] !== s[s.length - 1])
            break;

        if (s.length === 0 || popped[j] !== s[s.length - 1]) { s.push(pushed[i]); i++; }
        else { s.pop(); j++; }
        // console.log(s);

    }
    return s.length === 0;
};

// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
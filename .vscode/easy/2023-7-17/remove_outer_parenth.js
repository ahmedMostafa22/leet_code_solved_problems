/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    var ans = '';
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') { if (stack.length > 0) ans += s[i]; stack.push(s[i]); }
        else if (s[i] === ')') { if (stack.length > 1) ans += s[i]; stack.pop(); }
    }
    return ans;
};
// "(()())(())"

// console.log(removeOuterParentheses("(()())(())") === "()()()");
// console.log(removeOuterParentheses("(()())(())(()(()))") === "()()()()(())");
// console.log(removeOuterParentheses("()()") === "");
// console.log(removeOuterParentheses("((()())(()()))") === "(()())(()())");



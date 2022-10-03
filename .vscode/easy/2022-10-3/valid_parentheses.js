/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(stack);
        if (s[i] === ')' && stack[stack.length - 1] === '(' || s[i] === '}' && stack[stack.length - 1] === '{' || s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else { stack.push(s[i]) }
    }
    return stack.length === 0;
};

console.log(isValid('{}[]()'));
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.max = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.max > this.stack.length) this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.stack.length > 0 ? this.stack.pop() : -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    for (let i = 0; i < Math.min(k, this.stack.length); i++) this.stack[i] += val;
};
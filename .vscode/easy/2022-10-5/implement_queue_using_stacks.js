

function MyQueue() {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.arr.push(x);
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    var removedElement = this.arr[0] ? this.arr[0] : null;
    if (!this.arr.empty) {
        this.arr.shift();
        return removedElement;
    } return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return !this.arr.empty ? this.arr[0] : null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.arr.length === 0;
};


var obj = new MyQueue();
console.log(obj);
obj.push(5);
console.log(obj);
var param_2 = obj.pop();
console.log(obj);
var param_4 = obj.empty();
console.log(obj);
var param_3 = obj.peek();
console.log(obj);


var TimeLimitedCache = function () {
    this.map = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    var exist = false;

    if (this.get(key) !== -1)
        exist = true;

    this.map.set(key, [value, Date.now() + duration])

    return exist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    var res = this.map.get(key);
    if (res && res[1] >= Date.now()) {
        return res[0];
    }

    else return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    var size = 0;
    this.map.forEach((v, k) => {
        if (v[1] >= Date.now()) size++;
    });
    return size;
};

// var obj = new TimeLimitedCache()
// obj.set(1, 42, 1000); // false
// obj.get(1) // 42
// obj.count() // 1    

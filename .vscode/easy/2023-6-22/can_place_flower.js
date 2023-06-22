/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    var flowers = n;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
            n--;
            flowerbed[i] = 1;
        }
    }
    return n <= 0;
};

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    var sumA = 0, sumB = 0;

    for (let i = 0; i < aliceSizes.length; i++)sumA += aliceSizes[i];
    for (let i = 0; i < bobSizes.length; i++)sumB += bobSizes[i];

    for (let i = 0; i < bobSizes.length; i++)
        for (let j = 0; j < aliceSizes.length; j++)
            if (sumB - bobSizes[i] + aliceSizes[j] === sumA - aliceSizes[j] + bobSizes[i]) return [aliceSizes[j], bobSizes[i]];
};
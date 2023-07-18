/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    var ans = 0;
    var points = [];
    operations.forEach(op => {
        console.log(points);
        if (op === 'C') points.pop();
        else if (op === 'D') points.push(points[points.length - 1] * 2);
        else if (op === '+') points.push(points[points.length - 2] + points[points.length - 1]);
        else points.push(parseInt(op));
    });

    for (let i = 0; i < points.length; i++) ans += points[i];

    return ans;
};
// console.log(calPoints(["5", "2", "C", "D", "+"]) === 30);
// console.log('======================================================================');
// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]) === 27);
// console.log('======================================================================');
// console.log(calPoints(["1", "C"]) === 0);
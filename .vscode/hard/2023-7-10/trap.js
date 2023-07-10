/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var start = -1, end = -1;
    var startIndex = -1, endIndex = -1;
    var hasReminder = false;
    var lastReached = -1;
    var water = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > 0) {
            if (start === -1) {
                start = height[i];
                startIndex = i;
            }
            else if (start <= height[i]) {
                end = height[i];
                endIndex = i;
                for (let j = startIndex + 1; j < endIndex; j++) {
                    if (height[j] < Math.min(start, end)) {
                        water += Math.min(start, end) - height[j];
                        //  console.log('WATER ' + water);
                    }
                }
                start = end; end = -1; startIndex = endIndex; endIndex = -1;
            }
        }

        if (i === height.length - 1 && start != -1 && end === -1) {
            hasReminder = true;
            lastReached = water === 0 ? 0 : startIndex;
            start = -1; end = -1; startIndex = -1; endIndex = -1;
            //console.log('DETECTEDDDDDD last reacehd', lastReached);
        }
    }
    if (lastReached != -1)
        for (let i = height.length - 1; i >= lastReached; i--) {
            if (height[i] > 0) {
                if (start === -1) {
                    start = height[i];
                    startIndex = i;
                    //console.log('START AND END', startIndex, endIndex);
                }
                else if (start <= height[i]) {
                    end = height[i];
                    endIndex = i;
                    //console.log('START AND END', startIndex, endIndex);
                    for (let j = startIndex - 1; j >= Math.max(lastReached, endIndex); j--) {
                        // console.log('DETECTEDDDDDD2222222');

                        if (height[j] < Math.min(start, end)) {
                            water += Math.min(start, end) - height[j];
                            // console.log('WATER ' + water);
                        }
                    }
                    start = end; end = -1; startIndex = endIndex; endIndex = -1;
                    // console.log('START AND END', startIndex, endIndex);
                }
            }
        }
    return water;
};

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(trap([4, 2, 0, 3, 2, 5]));
// console.log(trap([4, 2, 3]));

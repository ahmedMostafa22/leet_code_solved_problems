var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 2;

function binarySearch(arr, target) {
    var s = 0; e = arr.length;

    while (s <= e) {
        var mid = Math.floor((s + e) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) e = mid - 1;
        else s = mid + 1;
        return -1;
    }
}


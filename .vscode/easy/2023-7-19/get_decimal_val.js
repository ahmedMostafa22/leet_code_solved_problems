/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    var len = 0;
    var h = head;
    while (h) {
        h = h.next;
        len++;
    }
    var i = 0;
    var ans = 0;
    while (head) {
        if (head.val === 1)
            ans += Math.pow(2, len - i - 1);
        head = head.next;
        i++;
    }
    return ans;
};
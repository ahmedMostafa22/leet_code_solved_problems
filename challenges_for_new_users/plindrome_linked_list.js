/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    for (var i = 0; i <= head.length / 2; i++) {
        if (head[i] !== head[head.length - 1 - i]) {
            return false;
        }
    }
    return true;
}   
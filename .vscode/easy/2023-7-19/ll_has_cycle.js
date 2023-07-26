/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    var len = 0;
    while (head && len !== 10001) {
        head = head.next;
        len++;
    }

    return len === 10001 ? true : false
};
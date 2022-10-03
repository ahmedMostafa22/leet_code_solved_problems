/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
    var h = head;
    var length = 0;
    while (h) {
        length++;
        h = h.next;
    }
    for (var i = 0; i < Math.floor(length / 2); i++) {
        head = head.next;
    }
    return head;
}; 
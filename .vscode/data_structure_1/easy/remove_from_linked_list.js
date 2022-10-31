/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var temp2 = head;
    var temp = head;
    temp2 = temp2.next;

    while (temp2) {
        console.log(1);
        if (temp2.val === val) {
            temp.next = temp2.next;
            console.log(val);
        }
        temp2 = temp2.next;
        temp = temp.next
    }
    return temp2;
};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6));
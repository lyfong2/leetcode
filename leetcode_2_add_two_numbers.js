/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let sum = 0;
    let cur = dummy;
    let p1 = l1, p2 = l2;    
    while (p1 !== null || p2 !== null){
        if (p1 !== null) {
            sum += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            sum += p2.val;
            p2 = p2.next;
        }        
        cur.next = new ListNode(sum % 10);
        sum = Math.floor(sum / 10);
        cur = cur.next;
    }
    if (sum === 1) {
        cur.next = new ListNode(1);
    }    
    return dummy.next;
};

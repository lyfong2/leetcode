/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let smallHead = new ListNode(0);
    let bigHead = new ListNode(0);
    let small = smallHead;
    let big = bigHead;
    
    while(head != null){
        let temp = new ListNode(head.val);
        if(head.val < x){
            small.next = temp;
            small = small.next;
        } else {
            big.next = temp;
            big = big.next;
        }
        head = head.next;
    }
    small.next = bigHead.next;
    return smallHead.next;
};

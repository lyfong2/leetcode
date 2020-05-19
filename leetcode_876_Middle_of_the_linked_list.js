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
var middleNode = function(head) {
    if(head == null) return head;
    //two pointers
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next != null) {
        if(fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
    }    
    return slow;
};

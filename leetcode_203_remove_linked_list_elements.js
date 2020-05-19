/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {    
    if (head === null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;
    
    while (curr.next != null){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        }else {
            curr = curr.next;
        }
    }
    
    
    return dummy.next;    
};

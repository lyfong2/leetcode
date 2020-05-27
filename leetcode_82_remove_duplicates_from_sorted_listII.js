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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;
    while(p.next !== null && p.next.next !== null){
        if(p.next.val === p.next.next.val){
            let sameNum = p.next.val;
            while(p.next !== null && p.next.val === sameNum){
                p.next = p.next.next;
            }
        } else {
            p = p.next;
        }
    }
    return dummy.next;
    
};

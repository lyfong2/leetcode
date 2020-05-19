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
var reverseList = function(head) {
    if (head === null || head.next == null) return head;
    let prev = null;
    
    while(head != null){
        let temp = head.next; // 2
        head.next = prev;     // null <- 1   2 -> 3
        prev = head;
        head = temp;        
    }
    return prev;
}

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
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let l1 = dummy;
    let l2 = head;
    
    while(l2 !== null && l2.next !== null){
        let nextStart = l2.next.next;
        l1.next = l2.next;
        l2.next.next = l2;
        l2.next = nextStart;
        l1 = l2;
        l2 = l2.next;
    }
    return dummy.next;
};
    

// dummy: 
// 0 -> 2    1 -> 2 -> 3 -> 4
// 
//      
// l1: 0
// l2: 1 
// nextStart: 3

    // Given 1->2->3->4, 
    // you should return the list as 2->1->4->3.

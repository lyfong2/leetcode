/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null) return head;
    let tail = head;
    let len = 1;
    // 算總長度
    
    while(tail.next){
        tail = tail.next;
        len++;
    }
    
    let count = len - (k % len);
    tail.next = head;
    
    while(count > 0){
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;
};

// 1->2->3->4->5->1->2->3
//          h 
//                      t
// count: 0

// 1->2->3->4->5->NULL, k = 2
// 4->5->1->2->3->NULL



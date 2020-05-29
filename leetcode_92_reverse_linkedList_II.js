/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let cur = dummy.next;
    
    for (let i = 0; i < m - 1; i++){
        pre = pre.next;
        cur = cur.next;
    }
    for (let i = 0; i < n - m; i++){
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return dummy.next;
    
};

// m = 2, n = 4
// temp: 3
// Input: 1->2->3->4->5->NULL, 
//        p  
//           c
//              t

// Output: 1->4->3->2->5->NULL
    



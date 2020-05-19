/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) return true;
    let middle = findMiddle(head);
    middle.next = reverse(middle.next);
    
    let p = head;
    let q = middle.next;
    while (p !== null && q !== null) {
        if (p.val != q.val ) return false;
        p = p.next;
        q = q.next;
    }
    return true;    
};


var findMiddle = function(head){
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;        
    }
    return slow;
}

var reverse = function(head){
    let prev = null;
    while (head !== null) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}

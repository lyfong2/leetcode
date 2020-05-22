function ListNode(val, next){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

let l1 = new ListNode(2); 
l1.next = new ListNode(4); 
l1.next.next = new ListNode(3); 

let l2 = new ListNode(5); 
l2.next = new ListNode(6); 
l2.next.next = new ListNode(4); 

let head = addTwoNumbers(l1,l2);

while(head){
    console.log(head.val);
    head= head.next;
}

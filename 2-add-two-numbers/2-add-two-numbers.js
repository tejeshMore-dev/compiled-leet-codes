/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0), c = 0;
    let pointer = res;
    
    while( l1 || l2 || c ) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + c;
        
        let node = new ListNode(sum % 10);
        pointer.next = node;
        pointer = node;

        c = Math.floor(sum/10);
        
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    
    return res.next;
};
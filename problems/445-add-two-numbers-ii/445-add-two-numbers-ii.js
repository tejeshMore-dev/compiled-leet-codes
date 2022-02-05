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
    let stack1 = [], stack2 = [];
    let c = 0;
    let ansNode = new ListNode(0), current = ansNode, prev = null;
    
    while( l1 ) {
        stack1.push( l1.val );
        l1 = l1.next;
    }
    
    while( l2 ) {
        stack2.push( l2.val );
        l2 = l2.next;
    }
    
    while( c || stack1.length > 0 || stack2.length > 0 ) {
        let sum = ( stack1.length > 0 ? stack1.pop() : 0 ) + ( stack2.length > 0 ? stack2.pop() : 0 ) + c;
        
        current = new ListNode( sum%10 );
        current.next = prev;
        prev = current;
        c = Math.floor( sum/10 );
    }
    
    return current;
};
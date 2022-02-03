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
    let s1 = [], s2 = [];
    let c = 0;
    let ansNode = new ListNode(0), current = ansNode, prev = null;
    
    while( l1 ) {
        s1.push( l1.val );
        l1 = l1.next;
    }
    
    while( l2 ) {
        s2.push( l2.val );
        l2 = l2.next;
    }
    
    while( c || s1.length > 0 || s2.length > 0 ) {
        let sum = ( s1.length > 0 ? s1.pop() : 0 ) + ( s2.length > 0 ? s2.pop() : 0 ) + c;
        
        current = new ListNode( sum%10 );
        current.next = prev;
        prev = current;
        c = Math.floor( sum/10 );
    }
    
    return current;
};
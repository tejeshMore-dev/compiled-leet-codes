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
    if( k === 0 || !head ) return head;
    
    // find length
    let L = 0;
    let node = head;
    while ( node ) {
        L++;
        node = node.next;
    }
    
    k = k % L;
    if( k === 0 ) return head;
    
    node = head;
    let N = L-k-1;
    while ( N ) {
        node = node.next;
        N--;
    }
    
    let lastN = node; 
    let headN = node.next;
    node = headN;
    while ( node && node.next ) {
        node = node.next;
    }
    
    node.next = head;
    lastN.next = null;
    head = headN;
    
    return head;
};
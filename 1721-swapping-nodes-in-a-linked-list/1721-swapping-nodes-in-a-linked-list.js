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
var swapNodes = function(head, k) {
    let node = head, c = 0;
    let node1, node2;
    
    while( node ) {
        c++;        
        node2 = node2 ? node2.next : null;
        
        if( c === k ) {
            node1 = node;
            node2 = head;            
        }
        
        node = node.next;
    }
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
    
    return head;
};
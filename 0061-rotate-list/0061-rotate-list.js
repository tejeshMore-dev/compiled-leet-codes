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
    if( k === 0 || !head )
        return head
    
    let length = 0;
    let node = head;
    while( node ) {
        length++;
        node = node.next;
    }
    
    k = k%length;
    if( k === 0 )
        return head;
    
    let mid = length-k;
    
    node = head;
    while( mid-1 ) {
        node = node.next        
        mid--;
    }
    
    let newHead = node.next;
    node.next = null;
    
    node = newHead;
    while(node && node.next) {
        node = node.next;
    }
    node.next = head;
    return newHead
};
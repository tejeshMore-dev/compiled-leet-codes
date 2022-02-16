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
var deleteNodes = function(head, m, n) {
    let p1 = 0;
    let node = head;
    while ( node ) {
        if( p1 < m-1  ){
            p1++
        } else { 
            let p2 = 0; 
            while( p2 < n && node.next ) {
                p2++;
                node.next = node.next.next;
            }
            p1 = 0;
        }
        node = node.next;
    }
    
    return head;
};
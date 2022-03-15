/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let p1 = dummyNode;
    let p2 = dummyNode;
        
    while( n ) {
        p2 = p2.next;
        n--;
    }
    
    while( p2 && p2.next ) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    p1.next = p1.next ? p1.next.next : p1.next;
    
    return dummyNode.next;
};
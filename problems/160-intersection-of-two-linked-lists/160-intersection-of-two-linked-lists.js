/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let result;
    if( !headA || !headB ) return null
    
    let nodeA = headA, nodeB = headB;
    while( nodeA !== nodeB ) {
 
        nodeA = !nodeA ? headB : nodeA.next;
        nodeB = !nodeB ? headA : nodeB.next;
    }
    
    return nodeA
};
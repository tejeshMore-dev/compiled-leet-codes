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
    let firstIteraionA = true, firstIteraionB = true, result;
    let nodeA = headA, nodeB = headB;
    while( nodeA && nodeB ) {
        if( nodeA === nodeB )
            return result = nodeA
        
        nodeA = nodeA.next;
        nodeB = nodeB.next;
        
        if( !nodeA && firstIteraionA ) {
            nodeA = headB;
            firstIteraionA = false;
        }
        if( !nodeB && firstIteraionB ) {
            nodeB = headA;
            firstIteraionB = false;
        }
    }
    
    return result
};
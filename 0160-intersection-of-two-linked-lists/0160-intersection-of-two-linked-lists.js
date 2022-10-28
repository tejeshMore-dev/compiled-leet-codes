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
    let result = null;
    let nA = headA, nB = headB;
    
    while( nA && nB) {
      if( nA === nB )
          return result = nA
        
        nA = nA.next;
        nB = nB.next;
        
        if( !nA && !nB )
            return
        
        if( !nA )
            nA = headB;
        
        if( !nB )
            nB = headA;
    }
    
    return result;
};
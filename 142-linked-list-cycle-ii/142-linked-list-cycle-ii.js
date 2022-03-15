/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if( !head ) return head
    let sp = head, fp = head, isCycleFound = false;
    
    while( sp && fp && sp.next && fp.next ) {
        sp = sp.next;
        fp = isCycleFound ? fp.next : fp.next.next;
        
        if( sp === fp ) {
            if( isCycleFound || sp === head ) return sp
            isCycleFound = true;
            sp = head;
        }
    }
    
    return null;
};
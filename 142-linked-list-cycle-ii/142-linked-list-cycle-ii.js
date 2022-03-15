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
    if( !head ) return null;
    
    let sp = head;
    let fp = head;
    let cycleFound = false;
    
    while( sp && sp.next && fp && fp.next ) {
        sp = sp.next;
        fp = cycleFound ? fp.next : fp.next.next;
        
        if( sp === fp ) {
            if( cycleFound || sp == head ) return sp
            cycleFound = true;
            fp = head;
        }
    }
    
    return null;
};
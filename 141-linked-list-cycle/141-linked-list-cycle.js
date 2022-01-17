/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if( !head || !head.next || !head.next.next ) return false
    
    let sp = head, fp = head.next.next;
    
    while( sp && fp ) {
        if( sp === fp )
            return true
        
        sp = sp.next;
        fp = fp.next ? fp.next.next : fp.next;
    }
    
    return false
};
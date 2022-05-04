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
    let sp = head, fp = head, result = false;
    
    while( sp && sp.next && fp.next && fp.next.next ) {
        sp = sp.next;
        fp = fp.next.next;
          
        if( sp === fp )
            return result = true;
    }
    
    return result;
};
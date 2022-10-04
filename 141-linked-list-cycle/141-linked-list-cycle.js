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
    if( !head )
        return false;
    
    let sp = head, fp = head;
    let result = false;
    
    sp = sp.next;
    fp = fp.next ? fp.next.next : null;
    
    while( sp && fp ) {
        if( sp === fp )
            return result = true;
        
        sp = sp.next;
        fp = fp.next ? fp.next.next : null;
    }
    
    return result;
};

/*
[3,2,0,-4]


*/
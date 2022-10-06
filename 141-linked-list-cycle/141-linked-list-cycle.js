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
    let sp = head, fp = head;
    let result = false;
    
    while(fp && fp.next ) {        
        sp = sp.next;
        fp = fp.next ? fp.next.next : null;
        
        if( sp === fp )
            return result = true;
    }
    
    return result;
};

/*
[3,2,0,-4]


*/
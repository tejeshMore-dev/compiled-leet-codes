/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if( !l2 )
        return l1
    
    if( !l1 )
        return l2
    
    let dummyNode = new ListNode(0);
    let current = dummyNode;
    
    while( l1 && l2 ) {
        if( l1.val <= l2.val ) {
            current.next = l1;
            current  = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            current  = l2;
            l2 = l2.next;
        }
        
        if( !l1 )
            current.next = l2
        
        if( !l2 )
            current.next = l1
    }
    
    return dummyNode.next;
};
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
    if( !l1 || !l2 ) return !l1 ? l2 : l1;
    
    let dummyNode = new ListNode(-1), pointer = dummyNode;
    
    while( l1 && l2 ) {
        if( l1.val <= l2.val ) {
            pointer.next = l1;
            pointer = l1;
            l1 = l1.next;
        } else {
            pointer.next = l2;
            pointer = l2;
            l2 = l2.next;
        }
        
        if( !l1 ) {
            pointer.next = l2
        }
        if( !l2 ) {
            pointer.next = l1
        }
    }
    
    return dummyNode.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if( !head )
        return head;
    
    let node = head;
    let prev = node;
    
    while( node ) {
        if( node.val === prev.val ) {
            prev.next = node.next
            node = node.next
        } else {
            prev = node;
            node = node.next;
        }  
    }
    
    return head
};
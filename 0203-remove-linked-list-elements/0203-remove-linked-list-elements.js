/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if( !head )
        return head;
    
    let dummyNode = new ListNode(-1, head);
    let node = head;
    let prev = dummyNode;
    
    while( node ) {
        if( node.val === val ) {
            prev.next = node.next;
            node = node.next;
        } else {
            prev = node;
            node = node.next;
        }
    }
    
    return dummyNode.next
};
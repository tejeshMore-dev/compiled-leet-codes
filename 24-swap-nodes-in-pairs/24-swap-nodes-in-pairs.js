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
var swapPairs = function(head) {
    if( !head || !head.next )
        return head;
    
    let node = head;
    let dNode = new ListNode(-1);
    let pNode = dNode;
    
    while( node && node.next ) {
        let fNode = node;
        let sNode = node.next;
        
        pNode.next = sNode;
        fNode.next = sNode.next;
        sNode.next = fNode;
        
        node = fNode.next;
        pNode = fNode;
    }
    
    return dNode.next;
};
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
    let node = head;
    
    while( node && node.next ) {
        let temp = node.val;
        let nextNode = node.next;
        
        node.val = nextNode.val;
        nextNode.val = temp;
        
        node = nextNode.next;
    }
    
    return head
};

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
var oddEvenList = function(head) {
    if( !head || !head.next || !head.next.next ) return head;
    
    let oddN = head;
    let evenN = oddN.next;
    let evenStart = evenN;
    
    while( oddN.next && evenN.next ) {
        oddN.next = evenN.next;
        evenN.next= oddN.next.next;
        oddN = oddN.next;
        evenN = evenN.next;
    }
    
    oddN.next = evenStart;
    return head;
};
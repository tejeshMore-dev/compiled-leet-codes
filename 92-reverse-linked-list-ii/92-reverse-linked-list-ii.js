/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if( left === right ) return head;
    if( !head ) return head;
    
    let prevN = null, curN = head;
    for ( let i=1; i<left; i++ ) {
        prevN = curN;
        curN = curN.next;
    }

    let counter = right - left + 1;
    let prev = null;
    let node = curN;

    while ( counter ) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
        counter--;
    }
    
    if( !prevN ) head = prev;
    else prevN.next = prev;
        
    
    if( node ) curN.next = node;

    
    return head;
};
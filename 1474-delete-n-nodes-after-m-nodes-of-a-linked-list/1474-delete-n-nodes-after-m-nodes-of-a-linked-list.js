/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let node = head;
    let counter = 0;
    
    while( node ) {
        if( counter < m-1 ) {
            counter++;
        } else {
            let counter2 = 0;
            while( counter2 < n && node.next  ) {
                node.next = node.next.next;
                counter2++;
            }
            counter = 0;
        }
        
        node = node.next;
    }
    
    return head;
};
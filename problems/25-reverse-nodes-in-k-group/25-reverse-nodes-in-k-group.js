/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if( k === 0 || !head ) return head;
    
    //find length ;
    let length = 0;
    let node = head;
    while( node ) {
        node = node.next;
        length++;
    }
    
    let n = Math.floor(length/k);
    if( n < 1 ) return head;
    
    node = head;
    let lastN = head;
    for( let i=0; i<n; i++ ) {
        let counter = k, firstN = node, prev = null;
        
        while( counter ) {
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
            counter--;
        }
        
        if( i === 0 ) {
            lastN = head;
            head = prev;
        } else {
            lastN.next = prev;
            lastN = firstN;
        }
    }
    
    if(node)
        lastN.next = node;
    
    return head;
};
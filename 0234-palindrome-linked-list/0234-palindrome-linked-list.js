/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //find length
    let length = 0;
    let node = head;
    while( node ) {
        length++;
        node = node.next;
    }

    // find mid
    let mid = Math.ceil(length/2);
    
    // traverse mid node
    node = head;
    while( mid ) {
        node = node.next;
        mid--;
    }
    
    //reverse 2nd half
    let prev = null;
    while( node ) {
        let nextNode = node.next;
        node.next = prev;
        prev = node;
        
        node = nextNode;
    }
    
    let rN = prev, lN = head;
    let result = true;
    while( rN ) {
        if( rN.val !== lN.val ) {
            return result = false;
        }
        
        rN = rN.next;
        lN = lN.next;
    }
  
    return result;
};
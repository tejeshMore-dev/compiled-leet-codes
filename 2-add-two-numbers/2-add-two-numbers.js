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
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode(0), prev = ans;
    let n1 = l1, n2 = l2, c = 0;
    
    while( n1 || n2 || c ) {
        let sum = ( n1 ? n1.val : 0 ) + ( n2 ? n2.val : 0 ) + c;
        
        let nNode = new ListNode(sum%10); 
        prev.next = nNode;
        prev = nNode;
        c = Math.floor( sum/10 );
        
        n1 = n1 ? n1.next : n1;
        n2 = n2 ? n2.next : n2;
    }
    
    return ans.next
};
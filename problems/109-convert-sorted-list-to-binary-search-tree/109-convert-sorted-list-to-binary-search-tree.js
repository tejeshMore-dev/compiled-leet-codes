/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let list = [];
    
    while( head ) {
        list.push(head.val);
        head = head.next;
    }
    
    return helper(0, list.length-1);
    
    function helper( lp, rp ) {
        if( lp > rp )
            return null
        
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        let root = new TreeNode(list[mid]);
        root.left = helper(lp, mid-1);
        root.right = helper(mid+1, rp)
        
        return root
    }
};
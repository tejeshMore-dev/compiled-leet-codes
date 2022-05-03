/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {    
    let ans;
    traverse( root);
    return ans;
    
    function traverse( node ) {
        if( !node )
            return;
        
        traverse(node.left);
        
        k--;
        if( k === 0 ) {
           ans = node.val;
        }
        traverse(node.right);
    }
};
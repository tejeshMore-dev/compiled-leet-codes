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
 * @return {number[]}
 */
// /* Recursive Approach
var preorderTraversal = function(root) {
    let ans = [];
    traverse( root, ans );
    return ans;
    
    function traverse( node, ans ) {
        if( !node )
            return 
        
        ans.push( node.val )
        traverse( node.left, ans);
        traverse( node.right, ans);
    }
    
};
// */


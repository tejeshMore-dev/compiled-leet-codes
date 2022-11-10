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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if( !root && !targetSum )
        return false
    
    let res = false, currentSum = 0;
    findHasPathSum(root);
    return res;
    
    function findHasPathSum( node ) {
        if( !node )
            return;
        
        currentSum += node.val;
        if( currentSum === targetSum && !node.left && !node.right )
            return res = true;
        
        findHasPathSum(node.left);        
        findHasPathSum(node.right);
        currentSum -= node.val;
    }
};
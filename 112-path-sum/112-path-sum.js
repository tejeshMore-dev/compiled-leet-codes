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
// /*
var hasPathSum = function(root, targetSum ) {    
    let ans = false; 
    helper( root, 0 );
    return ans;
    
    function helper( node, currentSum ) {
        if( !node )
            return;
        
        currentSum += node.val;
        
        if( currentSum === targetSum && !node.left && !node.right )
            return ans = true;
        
        helper( node.left, currentSum );
        helper( node.right, currentSum );
    }
};
// */

/*
var hasPathSum = function(root, targetSum ) {    
    if( !root )
        return false;
    
    targetSum -= root.val;
    if( !root.left && !root.right )
        return targetSum === 0;
    
    return hasPathSum( root.left, targetSum ) || hasPathSum( root.right, targetSum )
}
*/
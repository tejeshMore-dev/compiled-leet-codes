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
var hasPathSum = function(root, targetSum ) {
    if( !root )
        return false;
    
    return helper( root, 0 );
    
    function helper( node, sum ) {
        if( !node )
            return false;
        
        sum += node.val;
        
        if( !node.left && !node.right && sum === targetSum )
            return true;
        
        return helper( node.left, sum ) ||
         helper( node.right, sum );
    }
}












































/*
var hasPathSum = function(root, targetSum ) {    
    let ans = false; 
    helper( root, 0 );
    return ans;
    
    function helper( node, currentSum ) {
        if( !node )
            return false;
        
        currentSum += node.val;
        
        if( !node.left && !node.right )
            return ans = currentSum === targetSum;
        
        return helper( node.left, currentSum ) ||
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
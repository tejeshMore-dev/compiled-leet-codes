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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let ans, diff = Number.MAX_VALUE;
    dfs(root)
    return ans;
    
    function dfs(node) {
        if( !node )
            return null
        
        if( Math.abs(node.val - target) < diff ) {
            diff = Math.abs(node.val - target);
            ans = node.val;
        }
        
        dfs(node.left);
        dfs(node.right);
    }
    
    
};
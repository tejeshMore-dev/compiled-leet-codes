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
    let ans = root;
    dfs(root)
    return ans.val;
    
    function dfs(node) {
        if( !node )
            return null
        
        ans = Math.abs(node.val - target) < Math.abs(ans.val - target) ? node : ans;
        
        if( target < node.val )
            dfs(node.left);
        else if( target > node.val )
            dfs(node.right);
    }
    
    
};
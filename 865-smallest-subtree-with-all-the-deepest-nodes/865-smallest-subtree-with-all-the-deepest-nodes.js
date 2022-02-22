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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {  
    return helper(root, 0).node;
    
    function helper(node, d) {
        if( !node )
            return { node, d:0 }
        
        let l = helper(node.left, d+1);
        let r = helper(node.right, d+1);
        
        if( l.d > r.d )
            return { node: l.node, d: l.d + 1 }
        
        if( l.d < r.d )
            return { node: r.node, d: r.d +1 }
        
        return { node: node, d: l.d + 1 }
    }
};
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
var lcaDeepestLeaves = function(root) {
    return helper(root).node;
    
    function helper(node, d) {
        if( !node )
            return { node, d:0 }
        
        let leftT = helper(node.left, d + 1);
        let rightT = helper(node.right, d + 1);
        
        if( leftT.d > rightT.d )
            return { node: leftT.node, d: leftT.d + 1 }
        
        if( leftT.d < rightT.d )
            return { node: rightT.node, d: rightT.d + 1 }
        
        return { node: node, d: rightT.d + 1 }
    }
};

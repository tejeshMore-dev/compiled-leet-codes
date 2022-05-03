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
 * @return {number}
 */
var minDepth = function(root) {
    return helper( root, 0 );
    
    function helper( node, depth ) {
        if( !node )
            return 0;
        
        if( !node.left )
            return helper( node.right ) + 1;
        
        if( !node.right )
            return helper( node.left ) + 1;
        
        return 1 + Math.min( helper(node.left), helper(node.right) )
    }
};
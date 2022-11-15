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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root)
        return true;
    
    return findIsValidBST( root, -Number.MAX_VALUE, Number.MAX_VALUE );
    
    
    function findIsValidBST( node, min, max ) {
        if( !node )
            return true
        
        if( !(node.val > min && node.val < max) )
            return false
        
        return ( findIsValidBST(node.left, min, node.val ) && findIsValidBST(node.right, node.val, max ) )
    }
};
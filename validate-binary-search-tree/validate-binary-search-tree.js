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
    const MAX = Number.MAX_VALUE;
    return validate( root, MAX, -MAX );
    
    function validate( node, max, min ) {
        if( !node )
            return true;        
        
        return (  node.val > min && node.val < max && 
                  validate( node.left, node.val, min ) &&
                  validate( node.right, max, node.val ))
    }
};
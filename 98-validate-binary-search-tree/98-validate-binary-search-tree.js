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
/*
var isValidBST = function(root) {
    return validate( root );
    
    function validate( node, max, min ) {
        if( !node.left && !node.right )
            return node
        
        let left = validate( node.left, node.val, min )
        let right = validate( node.right, max, node.val )
        
        
        return validBST( node, left, right )
    }
    
    function validBST( node, left, right ) {
        if( !left )
        return  node.val > left.val && node.val < right.val
    }
};
*/

var isValidBST = function(root) {    
    const MAX = Number.MAX_VALUE;
    return validate(root, -MAX, MAX );
        
    function validate( node, left, right ) {
        if( !node )
            return true
        
        if( node.val <= left || node.val >= right)
            return false;
        
        let isLeftValid = validate( node.left, left, node.val );
        let isRightValid = validate( node.right, node.val, right );
        
        return isLeftValid && isRightValid;
    }
};
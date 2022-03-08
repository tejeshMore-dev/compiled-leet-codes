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
var isBalanced = function(root) {
    if( !root )
        return true;
    
    return traverse( root )[1];
    
    function traverse( node ) {
        if( !node )
            return [ 0, true ]
        
        let left = traverse( node.left );
        let right = traverse( node.right );
    
        let max = Math.max( left[0], right[0] );
        
        if( !left[1] || !right[1] || Math.abs( left[0] - right[0] ) > 1 )
            return [ max+1, false ]
        
        return [ max+1, true ]
    }
};
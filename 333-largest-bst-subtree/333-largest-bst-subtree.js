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
var largestBSTSubtree = function(root) {
    const MAX = Number.MAX_VALUE;
    return traverse( root )[2];
    
    //  min max count
    function traverse( node ) {
        if( !node )
            return [ MAX, -MAX, 0 ]
        
        let left = traverse( node.left );
        let right = traverse( node.right );
        
        
        // console.log(left, right)
        if( node.val > left[1] && node.val < right[0] )
            return [ Math.min( node.val, left[0] ), Math.max( node.val, right[1] ), left[2]+right[2]+1 ];
        
        return [ -MAX, MAX, Math.max( left[2], right[2] ) ];
    }
};
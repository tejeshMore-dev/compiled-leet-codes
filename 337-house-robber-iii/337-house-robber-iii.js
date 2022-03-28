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
var rob = function(root) {
    let res = helper( root );
    return Math.max( ...res );
    
    function helper( node ) {
        if( !node )
            return [ 0, 0 ] // withR withoutR
        
        if( !node.left && !node.right )
            return [ node.val, 0 ]
        
        let left = helper( node.left );
        let right = helper( node.right );
        
        let withRoot = node.val + left[1] + right[1];
        let withOutRoot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        
        return [withRoot, withOutRoot]
    }
};
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
var countUnivalSubtrees = function(root) {
    if( !root )
        return 0;
    
    let ans = 0;
    helper( root, root.val );
    return ans;
    
    function helper( node, val ) {
        if( !node )
            return [ true, val ];
        
        let left = helper( node.left, node.val );
        let right = helper( node.right, node.val );
        
        if( left[0] && right[0] && 
          left[1] === node.val && right[1] === node.val) {
            ans++;
            return [ true, node.val ]
        }
        return [ false, node.val ];
    }
};
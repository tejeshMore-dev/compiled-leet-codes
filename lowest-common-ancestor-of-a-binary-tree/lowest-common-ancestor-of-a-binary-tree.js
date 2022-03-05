/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return helper( root, p, q );
    
    function helper( node ) {
        if( !node )
            return null;
        
        if( node.val === p.val || node.val === q.val )
            return node.val === p.val ? p : q;
        
        let left = helper( node.left );
        let right = helper( node.right );
        
        if( left && right )
            return node;
        
        if( !left && !right )
            return null;
        
        if( left || right )
            return left ? left : right;
    }
};
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
    return findLowestCommonAncestor( root, p, q );
    
    function findLowestCommonAncestor( node, p, q ) {
                
        if( p.val < node.val && q.val < node.val )
            return findLowestCommonAncestor(node.left, p, q);
        else if( p.val > node.val && q.val > node.val )
            return findLowestCommonAncestor(node.right, p, q);
        else
            return node;
        
    }
};
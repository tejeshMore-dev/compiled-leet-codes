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
    if( root.val === p.val || root.val === q.val || ( Math.min(p.val, q.val) < root.val && Math.max(p.val, q.val) > root.val ) ) {
        console.log(root)
        return root
        
    }

    if( root.val > p.val )
        return lowestCommonAncestor(root.left, p, q)
    else 
        return lowestCommonAncestor(root.right, p, q)
};
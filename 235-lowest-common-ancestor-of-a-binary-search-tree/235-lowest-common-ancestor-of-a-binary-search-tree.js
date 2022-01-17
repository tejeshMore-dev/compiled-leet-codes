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
//     if( root.val === p.val || root.val === q.val || ( Math.min(p.val, q.val) < root.val && Math.max(p.val, q.val) > root.val ) ) {
//         console.log(root)
//         return root
        
//     }

//     if( root.val > p.val && root.val > q.val )
//         lowestCommonAncestor(root.left, p, q)
//     else if( root.val < p.val && root.val < q.val )
//         lowestCommonAncestor(root.right, p, q)
    
//     return root
    
    	// condition 1: if both p and q node value if less than the root node value,
	// that means that both nodes lie on its left side
    if(root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if(root.val < p.val && root.val < q.val) {
		// condition2: if both p and q node value is greater than the root node value, 
		// that means that both nodes lie on its right side
        return lowestCommonAncestor(root.right, p, q);
    }
	// condition 3: if p and q node lie on either side of the root node, that means
	// root node itself is the lowest common ancestor, so return root node
    return root;
};
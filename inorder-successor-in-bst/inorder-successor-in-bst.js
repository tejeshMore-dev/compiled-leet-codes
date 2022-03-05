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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let ans = null;
    let node = root;
    
    while( node ) {
        if( node.val <= p.val ) {
            node = node.right;
        } else {
            ans = node;
            node = node.left;
        }
    }
    
    return ans;
};
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
var maxDepth = function(root) {
    if(!root)
        return 0
    
    return findMaxDepth(root);
    
    function findMaxDepth(node) {
        if(!node)
            return 0;
        
        return Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1
    }
};
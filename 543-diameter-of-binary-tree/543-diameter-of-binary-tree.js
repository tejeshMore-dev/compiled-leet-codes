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
var diameterOfBinaryTree = function(root) {
    let result = 0;
    function findMaxDepth(node) {
        if( !node )
            return 0;
        
        let leftDepth = findMaxDepth(node.left);
        let rightDepth = findMaxDepth(node.right);
        
        result = Math.max( result, leftDepth + rightDepth )
        return Math.max(leftDepth, rightDepth ) + 1;
    }
    
    findMaxDepth(root);
    return result    
};
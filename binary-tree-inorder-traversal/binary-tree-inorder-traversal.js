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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if( !root )
        return [];
    
    let res = []
    findInorderTraversal(root, res);
    return res;
    
    function findInorderTraversal(node, res) {
        if( !node )
            return;
        
        findInorderTraversal(node.left, res);
        res.push( node.val );
        findInorderTraversal(node.right, res);
    }
};
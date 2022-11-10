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
var postorderTraversal = function(root) {
    if( !root )
        return [];
    
    let res = []
    findPostorderTraversal(root, res);
    return res;
    
    function findPostorderTraversal(node, res) {
        if( !node )
            return;
        
        findPostorderTraversal(node.left, res);
        findPostorderTraversal(node.right, res);
        res.push( node.val );
    }
};
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
var preorderTraversal = function(root) {
    if( !root )
        return [];
    
    let res = []
    findPreorderTraversal(root, res);
    return res;
    
    function findPreorderTraversal(node, res) {
        if( !node )
            return;
        
        res.push( node.val );
        findPreorderTraversal(node.left, res);
        findPreorderTraversal(node.right, res);
    }
};
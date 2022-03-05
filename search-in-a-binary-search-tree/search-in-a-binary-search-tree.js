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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return findNode(root,val);
};

function findNode(node, val) {
    if(!node)
        return null
    
    if(node.val === val) {
        console.log(node)
        return node        
    }
    
    if(node.val > val)
        node = node.left;
    else
        node = node.right;
    
    return findNode(node, val)
}
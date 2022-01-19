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
    let stack = [], node = root, result = [];

    while(node || stack[0]) {
        while(node) {
            stack.push(node);
            node = node.left ;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
    }

    return result;

};
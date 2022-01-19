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
	let result = [];
    function helper(node) {
            if(!node) return

            helper(node.left);
            result.push(node.val);
            helper(node.right);
        }

	helper(root);
	return result;
};
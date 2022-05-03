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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    findPath(root, 0, []);
    return result;
    
    function findPath(node, sum, path) {
        if( !node )
            return
        
        sum += node.val;
        
        if( !node.left && !node.right && sum === targetSum ) {
            result.push([ ...path, node.val ]);
            return;
        }
        
        findPath( node.left, sum, [ ...path, node.val ] );
        findPath( node.right, sum, [ ...path, node.val ] );
    }
    
};
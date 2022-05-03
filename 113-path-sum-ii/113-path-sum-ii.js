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
    let result = [], path = [];
    findPath(root, 0);
    return result;
    
    function findPath(node, sum) {
        if( !node )
            return
        
        sum += node.val;
        path.push( node.val );
        if( !node.left && !node.right && sum === targetSum ) {
            result.push([ ...path ]);
            path.pop();
            return;
        }
        
        findPath( node.left, sum );
        findPath( node.right, sum );
        path.pop();
    }
    
};
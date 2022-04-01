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
    
    function DFS(node, sum, path) {
        if(!node)
            return
        
        sum += node.val;
        path.push(node.val);
        
        if( sum === targetSum && !node.left && !node.right) {
            result.push( [ ...path ] )
        }
        
        DFS(node.left, sum, path);
        DFS(node.right, sum, path)
        path.pop();
    }
    
    DFS(root,0, []);
    
    return result
};
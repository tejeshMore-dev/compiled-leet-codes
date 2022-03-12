/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function compare(nodeA, nodeB) {
        if(!nodeA && !nodeB)
            return true
        else if((nodeA && !nodeB) || (!nodeA && nodeB))
            return false
        else if( nodeA.val !== nodeB.val)
            return false 
                
        return compare(nodeA.left, nodeB.left) && 
        compare(nodeA.right, nodeB.right)
    }
    
    return compare(p, q)
    
};
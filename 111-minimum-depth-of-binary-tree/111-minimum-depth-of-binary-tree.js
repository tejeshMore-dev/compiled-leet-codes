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
 * @return {number}
 */
var minDepth = function(root) {
    function depth(node) {
        if(!node)
            return 0
        console.log(node.val)
        if( !node.left && node.right  )
            return depth(node.right) + 1;
    
        if( node.left && !node.right  )
            return depth(node.left) + 1;
        
        return Math.min( depth(node.left), depth(node.right) ) + 1;
    }
    
    return depth(root);
};
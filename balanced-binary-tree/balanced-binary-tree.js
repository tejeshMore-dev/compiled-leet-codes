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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if( !root )
        true;
    
    let res = true;
    traverse(root);
    return res
    
    function traverse(node) {
        if( !node )
            return 0;
        
        let leftH = traverse(node.left);
        let rightH = traverse(node.right);
        
        if( Math.abs(leftH - rightH) > 1 )
            return res = false;
        
        return Math.max(leftH + 1, rightH + 1) ;
    }
    
};
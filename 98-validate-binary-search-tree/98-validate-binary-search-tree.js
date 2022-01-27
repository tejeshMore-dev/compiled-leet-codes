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
var isValidBST = function(root) {
    let MAX = Number.MAX_VALUE;
    
    function validNode(node, min, max) {
        if( !node )
            return true
          console.log(node.val, min, max) 
        return  ( node.val > min && 
                  node.val < max &&
                  validNode( node.left, min, node.val ) && 
                  validNode( node.right, node.val, max )
                );
    }
    
    return validNode( root, -MAX, MAX );
};
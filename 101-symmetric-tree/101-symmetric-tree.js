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
var isSymmetric = function(root) {
    if( !root )
        return true;
    
    return helper( root.left, root.right );
    
    function helper( node1, node2 ) {
        if( !node1 && !node2 )
            return true;
    
        if( (node1 && !node2) || (!node1 && node2) )
            return false;
        
        // console.log(node1.val, node2.val);
    
        return ( node1.val === node2.val && 
                helper( node1.left, node2.right ) &&
                helper( node1.right, node2.left )
               )
    }

};
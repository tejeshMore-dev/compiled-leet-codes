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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return findSearchBST( root, val );
    
    function findSearchBST( node, val ) {
        if( !node )
            return null;
        
        if( node.val === val )
            return node;
        
        let res = null;
        
        if( val < node.val )
            res = findSearchBST(node.left, val);
        else if( val > node.val )
            res = findSearchBST(node.right, val);
            
        return res;
    }
};
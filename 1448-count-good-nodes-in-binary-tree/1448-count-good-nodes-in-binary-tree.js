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
var goodNodes = function(root) {
    if( !root )
        return 0;
    
    return findGoodNode(root, root.val);
    
    function findGoodNode( node, max ) {
        if( !node )
            return 0
        
        max = Math.max( node.val, max );
        let res = 0;
        
        if( node.val >= max )
            res += 1;
        
        res += findGoodNode(node.left, max);
        res += findGoodNode(node.right, max);
        
        return res;
    }
};
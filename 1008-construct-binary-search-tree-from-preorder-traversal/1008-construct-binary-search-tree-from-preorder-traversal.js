/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// /* O(n) solution
var bstFromPreorder = function(preorder) {
    let i = 0;
    const MAX = Number.MAX_VALUE;
    return createBST( -MAX, MAX );
    
    
    function createBST( min, max ) {
        if( i === preorder.length )
            return null;
        
        let val = preorder[i];
        if( val < min || val > max )
            return null;
        
        i++;
        let root = new TreeNode( val );
        root.left = createBST( min, val );
        root.right = createBST( val, max );
        
        return root;
    }
}
// */

/* Brute force solution O(n logn)
var bstFromPreorder = function(preorder) {
    if( preorder.length === 0 )
        return null;
    
    let root = new TreeNode(preorder[0]);
    
    for( let i = 1; i < preorder.length; i++ ) {
        insertInBST(preorder[i])
    }
    return root;
    
    function insertInBST(val) {
        let node = root;
        
        while( node ) {
            let childName = val < node.val ? "left" : "right";
            
            if( !node[childName] ) {
                node[childName] = new TreeNode(val);
                break;
            }
            node = node[childName];           
        }
    }
};
*/
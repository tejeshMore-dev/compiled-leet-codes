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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if( preorder.length === 0 || inorder.length === 0 )
        return null;
    
    let map = {};
    
    for( let i=0; i<inorder.length; i++ ) {
        map[inorder[i]] = i;
    }
    
    return createTree( 0, preorder.length-1, 0, inorder.length-1 );
    
    function createTree( pS, pE, iS, iE ) {
        if( pS > pE || iS > iE )
            return null;
        
        let val = preorder[pS];
        let node = new TreeNode( parseInt(val) );
        
        let mid = map[val];
        let lEle = mid-iS;
        node.left = createTree( pS+1, pS+lEle, iS, mid-1 )
        node.right = createTree(  pS+lEle+1, pE, mid+1, iE )
            
        return node;
    }
};

/*


IN  [ l    Root r ] 9 3 15
PRE [ Root l    r ] 3 9 20



*/
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
    
    let map = new Map();
    for( let i in inorder ) {
        map.set( inorder[i], i );
    }
    // console.log(map);
    return helper( 0, 0, inorder.length-1 );
    
    function helper( pS, iS, iE ) {
        let root = new TreeNode( preorder[pS] );
        let mid = parseInt(map.get(root.val));
        
        if( mid > iS )
            root.left = helper( pS+1, iS, mid-1 );
        
        if(mid < iE )
            root.right = helper( pS+mid-iS+1, mid+1, iE );
        
        return root
    }
};

/*


IN  [ l    Root r ] 9 3 15
PRE [ Root l    r ] 3 9 20



*/
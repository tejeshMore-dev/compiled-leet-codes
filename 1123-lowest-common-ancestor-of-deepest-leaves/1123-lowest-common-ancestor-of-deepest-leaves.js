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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let maxDepth = 1;
    findMaxDepth( root, 1 );
    return helper( root, 1 );    

    function findMaxDepth( node, d ) {
        	if(!node)
		return 
        maxDepth = Math.max(maxDepth, d)
        findMaxDepth( node.left, d+1 );
        findMaxDepth( node.right, d+1 );
    }
	
    function helper( node, d ) {
        if( !node )
            return null

        if( d === maxDepth )
            return node

            let l = helper(node.left, d+1);
            let r = helper( node.right, d+1 );

        if( !l && !r )
            return null

        if( l && r )
            return node

            if ( !l ||  !r )
                return l ? l  : r
    }
};

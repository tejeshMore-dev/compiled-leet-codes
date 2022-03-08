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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if( !root )
        return null;
    
    let prev = null;
    createLL( root );
    
    function createLL( node ) {
        if( !node )
            return null;
        
        createLL( node.right );
        createLL( node.left );
        
        node.right = prev;
        node.left = null;
        prev = node;
    }
    
    
};
/*
[1]
[ 5 2 ]
[ 5 4 3 ]
[  ]


*/

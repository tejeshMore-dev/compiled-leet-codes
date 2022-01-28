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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ans = [];
   
    function traverse( node, nodes ) {
        if( !node.left && !node.right )
            ans.push( [ ...nodes, node.val ].join('->') );
           
        if( node.left )
            traverse( node.left, [ ...nodes, node.val ] );
    
         if( node.right )
            traverse( node.right, [ ...nodes, node.val ] );
    }
    
    traverse( root, [] );
    return ans;
};
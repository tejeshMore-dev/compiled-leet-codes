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
   
    function traverse( node, str ) {
        if( !node.left && !node.right )
            ans.push(str.length === 0 ? `${node.val}` : `${str}->${node.val}` );
           
        if( node.left )
            traverse( node.left, str.length === 0 ? `${node.val}` : `${str}->${node.val}` );
    
         if( node.right )
            traverse( node.right, str.length === 0 ? `${node.val}` : `${str}->${node.val}` );
    }
    
    traverse( root, "" );
    return ans;
};
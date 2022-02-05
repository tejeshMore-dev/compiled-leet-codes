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
    let stack = [ root ];
    
    while( stack.length > 0 ) {
        let node = stack.pop();
        
        if( !node )
            return
        
        if( node.right )
            stack.push(node.right);
        
        if( node.left )
            stack.push(node.left)
        
        node.right = stack[stack.length -1] || null;
        node.left = null
    }
};
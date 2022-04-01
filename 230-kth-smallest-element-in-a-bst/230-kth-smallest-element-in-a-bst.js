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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
//     // using iteration
//     let stack = [];
//     stack.push(root);
//     let current = root;
//     let result;
    
//     while( current ) {
//         while ( current ) {
//             stack.push(current);
//             current = current.left;
//         }    
        
//         current = stack.pop();
//         k--;
//         console.log(k, current.val)
//         if( k === 0 )
//             return result = current.val
        
//         if( current.right )
//             current = current.right
//     }
    
    let res
    inorderTraverse(root);
    return res;
    
    function inorderTraverse(node) {
        if(!node)
            return null
        
        inorderTraverse(node.left);
        
        k--;
        if(k === 0){
            return res = node.val;
            
        }
        inorderTraverse(node.right);
    }
};
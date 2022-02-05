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
var countNodes = function(root) {
    if( !root )
        return 0;
    
    let node;
    
    let leftH = 1;
    node = root.left;
    while(node) {
        leftH++;
        node = node.left;
    }
    
    let rightH = 1;
    node = root.right;
    while(node) {
        rightH++;
        node = node.right;
    }
    
    if( leftH === rightH )
        return 2 ** leftH - 1;
    
    return 1 + countNodes(root.left) + countNodes(root.right); 
    
//     let queue = [ root ], count = 0;
    
//     while( queue.length > 0 ) {
//         let qLength = queue.length, nullNode = false;
        
//         for( let i = 0; i < qLength; i++ ) {
//             let node = queue.shift();
            
//             if( node )
//                 count++;
              
//             if( !node ) 
//                 break
            
//             queue.push(node.left);
//             queue.push(node.right);
//         }
//     }
    
//     return count;
};
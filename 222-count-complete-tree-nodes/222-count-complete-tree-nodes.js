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
    let queue = [ root ], count = 0;
    
    while( queue.length > 0 ) {
        let qLength = queue.length, nullNode = false;
        
        for( let i = 0; i < qLength; i++ ) {
            let node = queue.shift();
            
            if( node )
                count++;
            
            if( node && nullNode )
                break;
              
            if( !node ) {
                nullNode = true;
                continue;
            }
            
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    return count;
};
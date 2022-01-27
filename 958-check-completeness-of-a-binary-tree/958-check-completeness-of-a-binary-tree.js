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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [ root ], ans = true;
    let nullNode = false;
    
    while( queue.length > 0 ) {
        let qLength = queue.length;
        
        for( let i = 0; i < qLength; i++  ) {
            let node = queue.shift();
            
            if( node && nullNode )
                return ans = false
            
            if( !node ) {
                nullNode = true
                continue;
            }
                
            queue.push(node.left);
            queue.push(node.right);
            console.log(queue)
        }
        
    }
        
    return ans;
};

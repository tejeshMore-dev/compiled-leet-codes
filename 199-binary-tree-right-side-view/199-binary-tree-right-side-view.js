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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if( !root ) return []
    
    let result = [], queue = [root];
    
    while( queue.length > 0 ) {
        let qLength = queue.length;
        result.push(queue[qLength-1].val)
        for( let i = 0; i < qLength; i++ ) {
            let node = queue.shift();
            

            
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
        
    }

    return result;
};
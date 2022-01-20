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
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if( !root ) return []
    
    let queue = [root], result = [];

	function bfs(queue) {
            while( queue.length > 0 ) {
                let qLength = queue.length, row = [];
                
                for( let i = 0; i < qLength; i++ ) {
                    let node = queue.shift();
                    row.push(node.val);
                    
                    if(node.left)
                        queue.push(node.left)
                    if( node.right )
                        queue.push(node.right);
                }
                result.push(row);
            }
        }

        bfs([root]);
        return result;

};
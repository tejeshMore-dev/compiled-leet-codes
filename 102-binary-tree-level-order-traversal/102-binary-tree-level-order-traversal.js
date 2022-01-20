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
    let queue = [root], result = [];

    while( queue[0] ) {
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
    
    return result;
};
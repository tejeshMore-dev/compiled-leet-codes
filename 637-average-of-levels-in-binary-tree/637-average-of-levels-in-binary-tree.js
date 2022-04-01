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
var averageOfLevels = function(root) {
    let queue = [ root ]
    let result = [];
    
    // find level order nodes
    function bfs() {
        while (queue.length > 0) {
            let nodes = queue.length;
            let arr = [];
            let sum = 0;
            
            for( let i=0; i<nodes; i++ ) {
                let node = queue.shift();
                sum += node.val;
                
                if(node.left)
                    queue.push(node.left)

                if(node.right)
                    queue.push(node.right)
            }
            
            result.push(sum / nodes)
        }
    }
        
    bfs();
    
    return result;
};
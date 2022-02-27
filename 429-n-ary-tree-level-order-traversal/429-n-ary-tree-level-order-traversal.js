/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if( !root )
        return [];
    
    let ans = [];    
    let queue = [ root ];
    
    while( queue.length ) {
        let qLength =  queue.length;
        let levelNode = [];
        
        for( let i=0; i < qLength; i++ ) {
            let current = queue.shift();
            levelNode.push(current.val);
            
            for( let child of current.children ) {
                queue.push(child)
            }
        }
        
        ans.push([ ...levelNode ]);
    }
    
    return ans;
};
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
        let levelNodes = [];
        
        for( let i=0; i < qLength; i++ ) {
            let current = queue.shift();
            levelNodes.push(current.val);
            
            for( let child of current.children ) {
                queue.push(child)
            }
        }
        
        ans.push([ ...levelNodes ]);
    }
    
    return ans;
};
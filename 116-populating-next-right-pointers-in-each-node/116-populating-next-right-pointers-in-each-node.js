/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if( !root )
        return root;
    
    let queue = [ root ];
    
    while( queue.length ) {
        let qLen = queue.length;
        // let levelNodes = [];
        
        for( let i=0; i < qLen; i++ ) {
            let current = queue.shift();
            
            if( i+1 < qLen )
                current.next = queue[0];
            
            if( current.left )
                queue.push(current.left);               
            
            if( current.right )
                queue.push(current.right);
        }
    }
    
    return root
};
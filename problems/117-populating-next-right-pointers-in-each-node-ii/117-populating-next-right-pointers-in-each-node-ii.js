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
    let queue = [ root ];
    
    while( queue[0] ) {
        let qLength = queue.length;
        
        for( let i=0; i<qLength; i++ ) {
            let current = queue.shift();
            
            if( i < qLength-1 )
                current.next = queue[0];
            
            if( current.left ) queue.push(current.left);
            if( current.right ) queue.push(current.right);
        }
    }
    
    return root;
};
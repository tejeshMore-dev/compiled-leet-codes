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
        let level = [];
        let qlength = queue.length;
        
        while(qlength ) {
            
            let node =  queue.shift();
            node.next = queue[0] ? queue[0] :  null;
            
            if(  node.left )
                level.push( node.left );
            
            if( node.right )
                level.push( node.right );
            qlength--;
        }
        queue = [ ...level ];
    }
    
    return root;
};
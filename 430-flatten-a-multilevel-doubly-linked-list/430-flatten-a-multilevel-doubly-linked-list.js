/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if( !head )
        return head;
    
    let stack = [ head ];
    let prev = null;
    
    while( stack.length ) {
        let node = stack.pop();
          if( node.next )
            stack.push( node.next );
        
        if( node.child )
            stack.push(node.child );
        
        if( prev )
            prev.next = node;
        node.prev = prev;
        node.child = null;
        prev = node;
    }
    
    return head;
};
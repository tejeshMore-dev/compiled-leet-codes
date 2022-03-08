/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if( !root )
        return null;
    
    let prev = null, head = null;
    createDL( root );
    
    head.left = prev;
    prev.right = head;
    return head;
    
    function createDL( node ) {
        if( !node )
            return null;
        
        createDL( node.left );
        
        if( !prev ) {
            head = node;
        } else {
            node.left = prev;
            prev.right = node;
        }
        
        prev = node;
        createDL( node.right );
    }
};
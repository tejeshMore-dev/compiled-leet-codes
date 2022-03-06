/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if ( !root )
        return 0;
    
    return traverse( root );
    
    function traverse( node ) {
        if( node.children.length === 0 ) {
            return 1;
        } else {
            let heights = [];
            
            for( let child of node.children ) {
                heights.push( traverse(child) );
            }
            return Math.max( ...heights ) + 1;
        }
    }
};
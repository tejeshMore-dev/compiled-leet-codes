/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let ans = [];
    traverse( root );
    return ans;
    
    
    function traverse( node ) {
        if( !node )
            return;
        
        for( let child of node.children ) {
            traverse( child );
        }
        
        ans.push( node.val );
    }
    
    
};
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = [];
    traverse( root );
    return ans;
    
    function traverse ( node ) {
        if( !node )
        return null;
        
        ans.push( node.val );
        
        for( let child of node.children ) {
            traverse( child )
        }
    }
};
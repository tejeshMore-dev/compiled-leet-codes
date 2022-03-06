/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function(root) {
    if( !root )
        return 0;
    
    let ans = 0;
    traverse( root );
    return ans;
    
    function traverse( node ) {
        if( node.children.length === 0 ) {
            return 1;
        } else {
            let max1 = 0, max2 = 0;
            
            for( let child of node.children ) {
                let d = traverse( child );
                
                if( d > max1 ) {
                    max2 = max1;
                    max1 = d;
                } else if( d > max2 ) {
                    max2 = d;
                }
            }
            ans = Math.max( ans, max1 + max2 );
            return max1 + 1;
        }
    }
};
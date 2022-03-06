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
            let heights = [];
            for( let child of node.children ) {
                heights.push( traverse( child ) );
            }
            
            if( heights.length > 1 ) {
                heights.sort();
                let max1 = heights.pop();
                let max2 = heights.pop();
                ans = Math.max( ans, max1 + max2 );
                return max1 + 1;                
            } else {                
                ans = Math.max( ans, heights[0] );                
                return heights[0] + 1;
            }
        }
    }
};
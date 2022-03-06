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

// /* Recursive Solution
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
// */

// /* Iterative Solution
var maxDepth = function(root) {
    if( !root )
        return 0;

    let ans = 1;
    let queue = [ root ];
    while( queue.length ) {
        let qLen = queue.length;
        let levelNodes = [];
        
        for( let i=0; i < qLen; i++ ) {
            let node = queue.pop();
            for( let child of node.children ) {
                levelNodes.push( child );
            }
        }
        
        queue.push( ...levelNodes );
        if( levelNodes.length )
            ans++;
    }
    return ans;
};
// */
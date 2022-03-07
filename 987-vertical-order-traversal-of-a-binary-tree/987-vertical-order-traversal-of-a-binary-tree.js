/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if( !root )
        return []
    
    let ans = [];
    let queue = [ [ root, 0, 0 ] ];
    let map = {};
    let min = 0, max = 0;
    while( queue.length ) {
        let qLen = queue.length;
        
        for( let i=0; i < qLen; i++ ) {
            let [ node, col, row ] = queue.shift();
            if( !map[col] )
                map[col] = [];
            
            min = Math.min( min, col );
            max = Math.max( max, col );
            
            map[col].push( { val: node.val , col, row } );
            
            if( node.left )
                queue.push( [ node.left, col-1, row+1 ] );
            
            if( node.right )
                queue.push( [ node.right, col+1, row+1 ] );
            
        } 
    }
    
    for( let i=min; i<=max; i++ ) {
        map[i].sort( ( a, b ) => a.row === b.row ? a.val - b.val : a.row - b.row);
        let nodes = [];
        map[i].map( node => nodes.push( node.val ) );
        ans.push( [ ...nodes ] );
    }    
    
    return ans;
};
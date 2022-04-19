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
var levelOrderBottom = function(root) {
    if( !root )
        return []
    
    let queue = [ root ], result = [];
    
    while( queue.length ) {
        let qlength = queue.length, nodes = [];
        
        for( let i=0; i < qlength; i++ ) {
            let node = queue.shift();
            nodes.push( node.val );
            
            if( node.left )
                queue.push( node.left );
            
            if( node.right )
                queue.push( node.right );
        }
        
        result.push( [ ...nodes ] );
    }
    
    return result.reverse();
};
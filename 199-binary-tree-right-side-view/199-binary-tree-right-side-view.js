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
 * @return {number[]}
 */

var rightSideView = function(root) {
    if( !root )
        return [];
    
    let queue = [ root ];
    let result = [];
    
    while( queue.length ) {
        let qLength = queue.length;
        
        for( let i=0; i<qLength; i++ ) {
            let current = queue.shift();
            
            if( i === qLength-1 )
                result.push( current.val );
            
            if( current.left )
                queue.push( current.left );
            
            if( current.right )
                queue.push( current.right );
        }
    }
    
    return result;
}










































/* Recursive Solution
var rightSideView = function(root) {
    if( !root )
        return [];
    
    let ans = [];
    traverse( root, 0 );
    return ans;
    
    
    function traverse( node, level ) {
        if( !node )
            return
        
        if( ans.length === level )
            ans.push( node.val );
        
        traverse( node.right, level+1 );
        traverse( node.left, level+1 );
    }
}
*/

/* Iterative Solution
var rightSideView = function(root) {
    if( !root ) return []
    
    let result = [], queue = [root];
    
    while( queue.length > 0 ) {
        let qLength = queue.length;
        result.push(queue[qLength-1].val);
        
        for( let i = 0; i < qLength; i++ ) {
            let node = queue.shift();
            
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
    }

    return result;
};
*/
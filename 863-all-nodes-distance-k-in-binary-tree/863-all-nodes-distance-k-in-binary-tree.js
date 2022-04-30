/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let parentMap = new Map(), visited = new Set();
    let result = [];
    
    findParentMapping( root, null );
    bfs( target, k );
    return result;
    
    function findParentMapping( node, parent ) {
        if( !node )
            return
        
        if( parent )
            parentMap.set( node.val, parent );
        
        findParentMapping( node.left, node );
        findParentMapping( node.right, node );
    }
    
    function bfs( node, k ) {
        if( !node ||visited.has(node.val) || k < 0 )
            return;
        
        visited.add( node.val );
        
        if( k === 0 )
            result.push( node.val );
        
        bfs( node.left, k-1 );
        bfs( node.right, k-1 );
        bfs( parentMap.get(node.val), k-1 );
    }
}
















































/*
var distanceK = function(root, target, k) {
    let ans = [];
    let map = {};
    let visited = new Set();
    
    getParentMapping(root);
    helper(target, k);
    
    return ans;
    
    function getParentMapping(node) {
        if( !node )
            return
        
        if( node.left ) {
            map[node.left.val] = node;
            getParentMapping(node.left);
        }
        
        if( node.right ) {
            map[node.right.val] = node;
            getParentMapping(node.right);
        }
    }
    
    
    function helper( node, k ) {
        if( !node || visited.has(node.val) || k < 0 )
            return
        
        visited.add(node.val);
        
        if( k === 0 ) {
            ans.push(node.val);
        }
        
        if( node.left) {
            helper( node.left, k-1 );
        }
        
        if( node.right ) {
            helper( node.right, k-1 );     
        }
        
        if( map[node.val] ) {
            helper( map[node.val], k-1 )            
        }
    }
};
*/
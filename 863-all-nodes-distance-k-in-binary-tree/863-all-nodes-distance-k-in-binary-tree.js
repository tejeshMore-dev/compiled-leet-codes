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
        if( !node )
            return null
        
        if( k === 0 ) {
            ans.push(node.val);
        }
        visited.add(node.val);
        console.log(ans, node.val, visited);
        
        if( node.left && k > 0 && !visited.has(node.left.val)) {
            helper( node.left, k-1 );
        }
        
        if( node.right && k > 0 && !visited.has(node.right.val) ) {
            helper( node.right, k-1 );     
        }
        
        if( map[node.val] && k > 0 && !visited.has(map[node.val].val) ) {
            helper( map[node.val], k-1 )            
        }
    }
};
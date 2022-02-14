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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if( !root )
        false
    
    let data = [];
    function dfs(node) {
        if( !node )
            return;
        
        dfs(node.left);
        data.push( node.val );
        dfs(node.right);
    }
    
    dfs(root);
    let lp=0, rp = data.length-1, result = false;
    
    while( lp < rp ) {
        let sum = data[lp] + data[rp];
        if( sum === k ) {
            return result = true
        } else if( sum > k ) {
            rp--
        } else {
            lp++
        }
    }
    
    return result;
};
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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    const MAX = Number.MAX_VALUE;
    let ans = -MAX;
    
    helper(root);
    return ans;
    
    function helper( node ) {
        if( !node )
            return { min:MAX , max:-MAX }
        
        let leftD = helper( node.left )
        let rightD = helper( node.right )
        
        let min = Math.min( leftD.min, rightD.min, node.val );
        let max = Math.max( leftD.max, rightD.max, node.val );
        
        ans = Math.max( Math.abs(node.val - min), Math.abs(node.val - max), ans );
        console.log(min, max, node.val, ans)
        return { min, max }
    };
};
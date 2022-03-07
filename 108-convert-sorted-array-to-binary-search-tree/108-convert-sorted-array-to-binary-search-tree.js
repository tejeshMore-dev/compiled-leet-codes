/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return createBST( 0, nums.length-1 );
    
    function createBST( s, e ) {
        if( s > e )
            return null;
        
        let i = Math.floor( s + (e-s)/2 )
        
        let root = new TreeNode(nums[i]);
        root.left = createBST( s, i-1 );
        root.right = createBST( i+1, e );
        
        return root;
    } 
};
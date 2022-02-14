/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    let arr1 = [], arr2 = [];
    
    function dfs( node, arr ) {
        if( !node )
            return
        
        dfs(node.left, arr);
        arr.push(node.val);
        dfs(node.right, arr)
    }
    
    dfs(root1, arr1);
    dfs(root2, arr2);
    
    let lp = 0, rp = arr2.length-1, result = false;
    
    while ( lp < arr1.length && rp >= 0 ) {
        let sum = arr1[lp] + arr2[rp]; 
        if( sum === target ) {
            return result = true;
        } else if( sum > target ) {
            rp--;
        } else {
            lp++;
        }
    }
    
    return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if( preorder.length === 0 )
        return null;
    
    let root = new TreeNode(preorder[0]);
    
    for( let i = 1; i < preorder.length; i++ ) {
        insertInBST(preorder[i])
    }
    return root;
    
    function insertInBST(val) {
        let node = root;
        
        while( node ) {
            let childName = val < node.val ? "left" : "right";
            
            if( !node[childName] ) {
                node[childName] = new TreeNode(val);
                break;
            }
            node = node[childName];           
        }
    }
};
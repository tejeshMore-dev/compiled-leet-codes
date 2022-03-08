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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if( !root )
        return null;
    
    if( key < root.val ) {
        root.left = deleteNode( root.left, key );
    } else if( key > root.val ) {
        root.right = deleteNode( root.right, key );
    } else {
        if( !root.left && !root.right ) {
            root = null;  
        } else if( root.right ) {
            root.val = sNode( root );
            root.right = deleteNode( root.right, root.val );
        } else {
            root.val = pNode( root );
            root.left = deleteNode( root.left, root.val );
        }
    }
    
    return root;
};

function sNode( node ) {
    node = node.right;
    
    while( node.left )
        node = node.left;
    
    return node.val
}


function pNode( node ) {
     node = node.left;
    
    while( node.right )
        node = node.right;
    
    return node.val
}
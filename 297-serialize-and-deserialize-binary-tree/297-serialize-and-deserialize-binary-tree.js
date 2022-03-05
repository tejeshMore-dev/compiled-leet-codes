/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if( !root )
        return "";
    
    let sb = [];
    
    function dfs( node ) {
        if( !node ) {
            sb.push("null")
            return
            
        }
        sb.push( node.val );
        dfs( node.left );
        dfs( node.right );
    }
    
    dfs( root );
    return sb.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    if( data.length === 0 )
        return null;
    
    let nodeValues = data.split(",");
    let i = 0;
    return createTree(nodeValues);
    
    function createTree( nodeValues) {
        let val = nodeValues[i++];
        if( val === "null" ) {
            return null
        }
        
        let root = new TreeNode( parseInt(val) );

        root.left = createTree(nodeValues);
        root.right = createTree(nodeValues);
        
        return root;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
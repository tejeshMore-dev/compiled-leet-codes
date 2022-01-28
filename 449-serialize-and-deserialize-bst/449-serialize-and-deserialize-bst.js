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
    let result = [];
    
    traverse(root);
    return result.join("");
    
    function traverse(root) {
        if( !root )
            return
        
        result.push(root.val, ',');
        traverse(root.left);
        traverse(root.right);
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if( data.length === 0 ) return null
    
    data = data.split(',');    
    let root = null;
    
    for( let i = 0; i < data.length - 1; i++ ) {
        insert( parseInt(data[i]) );        
    }
    return root;
    
    
    function insert(val) {
        if( !root ) {
            root = new TreeNode(val);
            return;
        }
        
        let node = root, childName = null;
        
        while( node ) {
            childName = val < node.val ? 'left' : 'right';
            
            if( !node[childName] ) {
                node[childName] = new TreeNode(val)
                return;
            } else {
                node = node[childName];
            }
        }
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
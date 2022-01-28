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
        return ""
    
    let result = [], stack = [ root ];
    
    while( stack.length > 0 ) {
        root = stack.pop();
        if( root )
            result.push(root.val+',');
        
        if( root.right )
            stack.push(root.right)
        
        if( root.left )
            stack.push(root.left)
    }
    return result.join("");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
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
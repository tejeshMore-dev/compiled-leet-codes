/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function(root) {
    if( !root )
        return null
    
    let cRoot = new Node(root.val);
    let queue = [[root, cRoot]];
    
    while( queue.length ) {
        let current = queue.pop();
        let [ node, cNode ] = current;
        
        for( let chNode of node.children ) {
            let node = new Node (chNode.val);
            cNode.children.push( node );
            queue.push([chNode, node] );               
        }        
    }
    
    return cRoot;
};
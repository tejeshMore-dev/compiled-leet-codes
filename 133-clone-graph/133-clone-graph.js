/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(n) {
    if( !n )
        return null
    
    let map = {};
    let queue = [ n ];
    
    while( queue.length > 0 ) {
        let node = queue.shift();
        
        if( !map[node.val] ) {
            let cNode = new Node(node.val);
            map[node.val] = cNode;            
        }
        
        for( let nNode of node.neighbors ) {
            if( !map[nNode.val] ) {
                map[nNode.val] = new Node(nNode.val);
                queue.push(nNode);                
            }
        
            map[node.val].neighbors.push(map[nNode.val]);
        }
    }
    
    return map[n.val];
};
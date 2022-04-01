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
        let node = queue.pop();
        
        if( !map[node.val] ) {
            // node not cloned, so cloned and stored in map
            let cNode = new Node(node.val);
            map[node.val] = cNode;            
        }
        
        for( let nNode of node.neighbors ) {
            if( !map[nNode.val] ) {
                // neighbor node not cloned, so cloned and stored in map
                map[nNode.val] = new Node(nNode.val);
                queue.push(nNode);                
            }
        
            // use cloned refrence from map to add neigbors
            map[node.val].neighbors.push(map[nNode.val]); 
        }
    }
    
    return map[n.val];
};
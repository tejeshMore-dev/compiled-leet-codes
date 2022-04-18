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
    // TC: O( N )
    // SC: O( N )
    if( !n )
        return n;
    
    let map = {};
    clone( [ n ] );
    return map[n.val];
    
    function clone( queue ) {
        while( queue.length ) {
            let node = queue.pop();
            if( !map[ node.val ] )
            map[ node.val ] = new Node( node.val )

            for( let nNode of node.neighbors ) {
                if( !map[ nNode.val ] ) {
                    map[nNode.val] = new Node( nNode.val );
                    queue.push( nNode );
                }

                 map[ node.val ].neighbors.push( map[nNode.val] );
            }
        }
    }
};
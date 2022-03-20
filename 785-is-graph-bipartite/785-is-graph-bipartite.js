/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
        const graphColor = new Array( graph.length ).fill(-1);
        
        for( let node in graph ) {
            if( graphColor[node] === -1 ) {
                if( !_isBipartite( node, graphColor, graph ) )
                    return false;
            }
        }
        
        return true;
};

function _isBipartite( node, graphColor, graph ) {
    let queue = [ node ];
    graphColor[node] = 1;

    while( queue.length ) {
        let currNode = queue.shift();
        
        for( let nNode of graph[currNode] ) {
            if( graphColor[nNode] === graphColor[currNode] ) {
                return false
                
            }
            
            if( graphColor[nNode] === -1 ) {
                graphColor[nNode] = 1 - graphColor[currNode];
                queue.push( nNode );
            }
                
        }
    }
    
    return true;
}



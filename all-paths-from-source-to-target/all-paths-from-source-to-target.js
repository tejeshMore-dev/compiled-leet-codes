/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    return findAllPath( 0, graph.length-1, graph, [], [0] )
    
    function findAllPath(node, d, graph, ans, temp) {
        if( node === d )
            ans.push([ ...temp ])
        
        for( let nNode of graph[node] ) {
            findAllPath(nNode, d, graph, ans, [ ...temp, nNode ]);
        }
        
        return ans
    }
};



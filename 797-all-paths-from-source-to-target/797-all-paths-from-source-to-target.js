/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let temp = [0];
    return findAllPath( 0, graph.length-1, graph, [] )
    
    function findAllPath(node, d, graph, ans) {
        if( node === d )
            ans.push([ ...temp ])
        
        for( let nNode of graph[node] ) {
            temp.push(nNode);
            findAllPath(nNode, d, graph, ans);
            temp.pop()
        }
        
        return ans
    }
};



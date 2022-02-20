/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const _graph = createGraph(graph);
    let nodes = [0], paths = [];
    dfs(0, 0, graph.length-1, {});
    return paths
    
    function dfs(n, s, e, visited) {
        console.log(n)
        visited[n] = 1;
        if( n === e ) {
            paths.push( [ ...nodes ] );
            return
        }
        for( let node of _graph[n] ) {                
                nodes.push(node);
                dfs(node, s, e, visited)
                nodes.pop();
        }
        
    }
};

function createGraph(graph) {
    let map = {};
    
    for( let i=0; i < graph.length; i++ ) {
        map[i] = [ ...graph[i] ];
    }
    
    return map
}
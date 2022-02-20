/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const _graph = createGraph(graph);
    
    return dfs(_graph, 0, graph.length-1, [0], []);
};

function dfs(graph, curr, e, nodes, paths) {
    if( curr === e ) {
        paths.push( [ ...nodes ] );
        return
    }
    for( let node of graph[curr] ) {                
            nodes.push(node);
            dfs(graph, node, e, nodes, paths)
            nodes.pop();
    }
    
    return paths;
}

function createGraph(graph) {
    let map = {};
    
    for( let i=0; i < graph.length; i++ ) {
        map[i] = [ ...graph[i] ];
    }
    
    return map
}
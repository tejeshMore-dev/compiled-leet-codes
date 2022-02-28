/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    const graph = new Graph();
    graph.buildGraph(n, edges);
    
    return graph.leadsToDestination(source, destination);
};

class Graph {
    constructor() {
        this.graph = {};
    }
    
    buildGraph(n, edges) {
        for( let i=0; i<n; i++ ) {
            this.graph[i] = [];
        }
        
        for( let edge of edges ) {
            let [from, to] = edge;
            
            this.graph[from].push(to);
        }
    }
    
    leadsToDestination( s, d ) {        
        return _dfs( s, d, new Set(), this.graph )
    }
}

function _dfs(node, d, visited, graph) {
    if( graph[node].length === 0 && node !== d ) // end node
        return false
    visited.add(node);
    
    for( let nNode of graph[node] ) {
        if( visited.has(nNode) )
            return false
        
        if( !_dfs(nNode, d, visited, graph) ) // if found end node !== destination, return false else continue
            return false;
    }
    visited.delete(node); // same node can be revisited during different path
    return true
}

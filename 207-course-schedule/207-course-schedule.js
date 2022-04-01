/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Graph();
    graph.buildGraph(prerequisites);
    
    return !graph.hasCycle();
};

class Graph {
    constructor( ) {
        this.graph = {};
    }
    
    buildGraph(edges) {
        for( let edge of edges ) {
            let [s, d] = edge;
            
            if( !this.graph[s] )
                this.graph[s] = [];
            
            if( !this.graph[d] )
                this.graph[d] = [];
            
            this.graph[s].push(d);
        }
    }
    
    hasCycle() {
        let allNodes = new Set( Object.keys(this.graph) );
        let visited = new Set();
        let visiting = new Set();
        let res = false;
        
        while( allNodes.size ) {
            allNodes.forEach((node) => {
                if( _hasCycle(node, allNodes, visited, visiting, this.graph ) )
                    return res = true
                
            })
        }
        
        return res;
    }
}

function _hasCycle(node, allNodes, visited, visiting, graph) {
    allNodes.delete(node);
    visiting.add(node);
    
    for( let nNode of graph[node] ) {
        if( visiting.has(nNode) )
            return true;
        
        if( visited.has(nNode) )
            continue;
        
        if( _hasCycle(nNode, allNodes, visited, visiting, graph) )
            return true
    }
    
    visited.add(node);
    visiting.delete(node);
    return false;
}

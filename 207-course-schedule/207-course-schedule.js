/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if( numCourses === 0 || prerequisites.length === 0 )
        return true
    
    const graph = new Graph(numCourses, prerequisites);
    return !graph.hasCycle();
};

var _graph;

class Graph {
    constructor(nodes, edges) {
        _graph = {};
        
        for( let i=0; i < edges.length; i++ ) {
            let [a, b] = edges[i];
            if( !_graph[a] )
                _graph[a] = [];
            
            if( !_graph[b] )
                _graph[b] = [];
            
            _graph[b].push(a);
        }
    }
    
    hasCycle() {
        let all = new Set();
        let visiting = new Set();
        let visited = new Set();
        let result = false;
        
        for(let node in _graph) {
            all.add(node);
        }
        
        while( all.size > 0 ) {   
            all.forEach((node) => {
                if( _hasCycle(node, all, visiting, visited) )
                    return result = true
            });
        }
        
        return result;
    }
}

function _hasCycle(node, all, visiting, visited) {
    all.delete(node);
    visiting.add(node);
    
    for( let nNode of _graph[node] ) {
        if( visited.has(nNode) )
            continue
        
        if( visiting.has(nNode) )
            return true
        
        if( _hasCycle( nNode, all, visiting, visited ) )
            return true
    }
    
    visiting.delete(node);
    visited.add(node);
    return false
}
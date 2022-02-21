/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {    
    const graph = new Graph(numCourses, prerequisites);
    return graph.hasCycle() ? [] : graph.topologicalSort();
};

var _graph;

class Graph {
    constructor(nodes, edges) {
        _graph = {};
        
        for( let i=0; i < nodes; i++ ) {
            _graph[i] = [];
        }
        
        for( let i=0; i < edges.length; i++ ) {
            let [a, b] = edges[i];
            _graph[b].push(a);
        }
    }
    
    hasCycle() {
        let all = new Set(Object.keys(_graph));
        let visiting = new Set();
        let visited = new Set();
        let result = false;

        while( all.size > 0 ) {
            all.forEach((node) => {
                if( _hasCycle(node, all, visiting, visited) ) {
                    return result = true
                    
                }
            });
        }

        return result
    }

    topologicalSort() {
        let stack = [];
        let visited = {};
        let allNodes = Object.keys(_graph);

        for( let node of allNodes ) {
            _topologicalSort(node, visited, stack);
        }
        
        let ans = [];
        while( stack.length > 0 ) {
            ans.push(stack.pop());
        }

        return ans;
    }
}

function _hasCycle(node, all, visiting, visited) {
    all.delete(node);
    visiting.add(node);
    
    for( let nNode of _graph[node] ) {
        if( visited.has(nNode) )
            continue;
        
        if( visiting.has(nNode) ){
            return true
                        
        }
        
        if( _hasCycle( nNode, all, visiting, visited ) )
            return true
    }
    
    visiting.delete(node);
    visited.add(node);
    return false
}

function _topologicalSort(node, visited, stack) {
    if( visited[node] )
        return
    
    visited[node] = 1;
    for( let nNode of _graph[node] ){
        _topologicalSort(nNode, visited, stack);
    }
    stack.push(node);   
}
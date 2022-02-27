/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let ans = [];
    
    const graph = new Graph();
    graph.buildGraph(equations, values);
    
    for( let query of queries ) {
        let [ s, d ] = query;
        ans.push( graph.calcDivision(s, d) )
    }
    
    return ans;
}

class EdgeNode {
    constructor(val, weight) {
        this.val = val;
        this.w = weight;
    }
}
class Graph {
    constructor() {
        this.graph = {};
    }
    
    buildGraph( edges, weights ) {
        for( let i=0; i < edges.length; i++ ) {
            let [s, d] = edges[i];
            let weight = weights[i];
            
            if( !this.graph[s] )
                this.graph[s] = [];
            
            if( !this.graph[d] )
                this.graph[d] = [];
            
            this.graph[s].push( new EdgeNode(d, weight) );
            this.graph[d].push( new EdgeNode(s, 1/weight) );
        }
    }
    
    calcDivision(s, d) {
        if( !this.graph[s] || !this.graph[d] )
            return -1.0;
        
        if( s === d )
            return 1.0;
        
        return _dfs(s, d, new Set(), this.graph);
        

    }
}

function _dfs(node, d, visited, graph) {
    if( node === d )
        return 1.0;

    visited.add(node);

    for( let nNode of graph[node] ) {
        if( visited.has(nNode.val) )
            continue;
        let ans = _dfs(nNode.val, d, visited, graph);
        if( ans !== -1 ) 
            return ans * nNode.w;
    }

    return -1.0
}


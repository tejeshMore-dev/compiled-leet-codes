/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const _graph = new Graph();
    _graph.buildGraph(dislikes);
    return _graph.isBipartite();
};


class Graph{
    constructor() {
        this.graph = {}
    }
    
    buildGraph(edges) {
        for( let edge of edges ) {
            let [ s, d ] = edge;
            
            if( !this.graph[s] )
                this.graph[s] = [];
            
            if( !this.graph[d] )
                this.graph[d] = [];
            
            this.graph[s].push(d);
            this.graph[d].push(s);
        }
    }
    
    isBipartite() {
        const graphColor = new Array( Object.keys(this.graph).length + 1 ).fill(-1);
        
        for( let node of Object.keys(this.graph) ) {
            if( graphColor[node] === -1 ) {
                if( !_isBipartite( node, graphColor, this.graph ) )
                    return false;
            }
        }
        
        return true;
    }
}

function _isBipartite( node, graphColor, graph ) {
    let queue = [ node ];
    graphColor[node] = 1;

    while( queue.length ) {
        let currNode = queue.shift();
        
        for( let nNode of graph[currNode] ) {
            if( graphColor[nNode] === graphColor[currNode] )
                return false
            
            if( graphColor[nNode] === -1 ) {
                graphColor[nNode] = 1 - graphColor[currNode];
                queue.push( nNode );
            }
                
        }
    }
    
    return true;
}
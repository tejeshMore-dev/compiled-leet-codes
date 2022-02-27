/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

/* Graph solution
var validPath = function(n, edges, source, destination) {
    const graph = new Graph();
    graph.buildGraph(n , edges);
    
    return graph.hasPath(source, destination);
}

class Graph {
    constructor() {
        this.graph = {};
    }
    
    buildGraph(n, edges) {
        for( let i=0; i<n; i++ ) {
            this.graph[i] = [];
        }
        
        for( let edge of edges ) {
            let [s, d] = edge;
            
            this.graph[s].push(d);
            this.graph[d].push(s);
        }
    }
    
    hasPath(s, d) {
        let visited = new Set();
        let queue = [s];
        let result = false;

        while( queue.length ) {
            let current = queue.pop(); // .shift() => BFS      .pop() => DFS
            visited.add(current);
            
            if( current === d )
                return result = true
            for( let nNode of this.graph[current] ) {
                if( visited.has(nNode) )
                    continue
                
                queue.push(nNode);
            }
        }
        
        return result;
    }
}

*/

// /* Union Find solution
var validPath = function(n, edges, source, destination) {
    const uf = new UnionFind();
    uf.makeSet(n);
    
    for( let edge of edges ) {
        let [s, d] = edge;
        uf.union(s, d);    
    }
    
    return uf.connected(source, destination);
}

class UnionFind {
    constructor() {
        this.root = {};
        this.rank = {};
    }
    
    makeSet(nodes) {
        for( let i=0; i < nodes; i++  ) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    
    union(s, d) {
        let rootS = this.find(s);
        let rootD = this.find(d);
        
        if( rootS !== rootD ) {
            if( this.rank[rootS] > this.rank[rootD] ) {
                this.root[rootD] = rootS;
            } else if( this.rank[rootS] < this.rank[rootD] ) {
                this.root[rootS] = rootD;
            } else {
                this.root[rootD] = rootS;
                this.rank[rootS] += 1;
            }
        }
    }
    
    find(node) {
        if( node === this.root[node] ) {
            return node
        }
        
        return this.root[node] = this.find(this.root[node]);
    }
    
    connected(s, d) {
        return this.find(s) === this.find(d);
    }
    
}
// */
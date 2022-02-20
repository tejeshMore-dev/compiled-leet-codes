/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var root;
var rank;

class unionFind {
    constructor(size) {
        root = new Array(size);
        rank = new Array(size);
        
        for( let i=0; i<size; i++ ) {
            root[i] = i;
            rank[i] = 1;
        }
    }
    
    find(x) {
        if( x === root[x] )
            return x
        
        return root[x] = this.find(root[x]);
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( rootX !== rootY ) {
            if( rank[rootX] > rank[rootY] ){
                root[rootY] = rootX
            } else if( rank[rootY] > rank[rootX] ){
                root[rootX] = rootY
            } else {
                root[rootY] = rootX
                rank[rootX] += 1;
            }
        }
    }
    
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

var validPath = function(n, edges, source, destination) {
    const uf = new unionFind(n);
    
    for( let i=0; i < edges.length; i++ ) {
        let [x, y] = edges[i];
        uf.union(x, y);
    }
    
    return uf.connected(source, destination);
};

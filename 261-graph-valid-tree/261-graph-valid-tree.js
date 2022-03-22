/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if( edges.length !== n-1 )
        return false;
    
    const uf = new UnionFind(n);
    
    for( let edge of edges ) {
        let [a, b] = edge;
        
        if( uf.connected(a,b) )
            return false;
        
        uf.union(a,b);
    }
    
    return true;
};

class UnionFind {
    constructor(n) {
        this.root = new Array(n);
        this.rank = new Array(n);
        
        for( let i=0; i<n; i++ ) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    
    find(a) {
        if( a === this.root[a] )
            return a
        
        return this.root[a] = this.find(this.root[a])
    }
    
    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        
        if( rootA !== rootB ) {
            if( this.rank[rootA] > this.rank[rootB] ) {
                this.root[rootB] = rootA
            } else if( this.rank[rootA] < this.rank[rootB] ) {
                this.root[rootA] = rootB;
            } else {
                this.root[rootB] = rootA
                this.rank[rootA] += 1;
            }
            
            
        }
    }
    
    connected(a, b) {
        return this.find(a) === this.find(b);
    }
}
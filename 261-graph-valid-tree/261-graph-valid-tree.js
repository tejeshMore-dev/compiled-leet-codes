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
        let [ s, d ] = edge;
        
        if( uf.connected(s, d) )
            return false;
        
        uf.union(s, d);
    } 
    
    return true;
};

class UnionFind {
    constructor(n) {
        this.root = {};
        this.rank = {};
        
        for( let i=0; i<n; i++ ) {
            this.root[i] = i;
            this.rank[i] = 1
        }
    }
    
    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        
        if( rootA !== rootB ) {
            if( this.rank[rootA] > this.rank[rootB] ) {
                this.root[rootB] = rootA;
            } else if( this.rank[rootA] < this.rank[rootB] ) {
                this.root[rootA] = rootB;
            } else {
                this.root[rootB] = rootA;
                this.rank[rootA]++;
            }
        }
    }
    
    find(a) {
        if( this.root[a] === a )
            return a
        
        return this.root[a] = this.find(this.root[a])
    }
    
    connected(a, b) {
        return this.find(a) === this.find(b);
    }
    
}
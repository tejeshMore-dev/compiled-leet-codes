/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const uf = new UnionFind(n);
    
    for( let edge of edges ) {
        let [a, b] = edge;
        uf.union(a,b);
    }
    
    return uf.getComponents();
};

class UnionFind {
    constructor(n) {
        this.root = {};
        this.rank = {};
        this.component = n;
        
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
            this.component--;
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
    
    getComponents(){
        return this.component;
    }
}
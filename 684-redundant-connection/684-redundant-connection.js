/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const uf = new UnionFind(1000+1);
    let ans = [0, 0];
    
    for( let edge of edges ) {
        let [s, d] = edge;
        
        if(uf.connected(s, d))
            ans = [ s, d ]

        uf.union(s, d);
    }
    return ans;
};

class UnionFind {
    constructor(size) {
        this.root = new Array(size);
        this.rank = new Array(size);
        
        for( let i=0; i<size; i++ ) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    
    
    find(a) {
        if( a === this.root[a] )
            return a
        
        return this.root[a] = this.find(this.root[a]);
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
                this.rank[rootA] += 1;
            }
        }
        
    }
    
    connected(a, b) {
        return this.find(a) === this.find(b);
    }
}
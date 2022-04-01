/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if( edges.length+1 !== n )
        return false;
    
    const unionFind = new UnionFind(n);
    for( let edge of edges ) {
        let [a, b] = edge;
        
        if( unionFind.connected(a, b) )
            return false;
        
        unionFind.union(a, b);
    }
    return true
};


class UnionFind {
    constructor(n) {
        this.root = {};
        this.rank = {};
        
        for( let i=0; i < n; i++ ) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    
    find(x) {
        if( x === this.root[x] )
            return x
        
        return this.root[x] = this.find(this.root[x])
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( this.rank[rootX] > this.rank[rootY] ) {
            this.root[rootY] = rootX;
        } else if( this.rank[rootX] < this.rank[rootY] ) {
            this.root[rootX] = rootY;
        } else {
            this.root[rootY] = rootX;
            this.rank[rootX] += 1;
        }
    }
    
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
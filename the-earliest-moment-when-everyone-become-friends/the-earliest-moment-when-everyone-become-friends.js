/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var rank;
var root;

class unionFind {
    constructor(size) {
        rank = new Array(size);
        root = new Array(size);
        this.components = size;
        
        for( let i=0; i < size; i++ ) {
            rank[i] = 1;
            root[i] = i;
        }
    }
    
    find(x) {
        if( x === root[x] )
            return x
        
        return root[x] = this.find(root[x])
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( rootX !== rootY ) {
            this.components--;
            
            if( rank[rootX] > rank[rootY] ) {
                root[rootY] = rootX;
            } else if( rank[rootX] < rank[rootY] ) {
                root[rootX] = rootY;
            } else {
                root[rootY] = rootX;
                rank[rootX] += 1;
            }
        }
    }
    
    
}


var earliestAcq = function(logs, n) {
    
    logs.sort( (a, b) => a[0] - b[0] )
    const uf = new unionFind(n);
    
    for( let i=0; i < logs.length; i++ ) {
        let [ ts, x, y ]  = logs[i];
        
        uf.union(x, y);
        
        if( uf.components === 1 )
            return ts
        
    }
    
    return -1
    
};
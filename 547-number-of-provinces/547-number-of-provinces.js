/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class UnionFind{
    constructor( size ) {
        this.root = new Array(size);
        this.rank = new Array(size);
        
        for( let i = 0; i < size; i++ ) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    
    find(x) {
        if( x === this.root[x] ) {
            return x
        }
        
        return this.root[x] = this.find(this.root[x])
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( rootX !== rootY ) {
            if( this.rank[rootX] > this.rank[rootY] ) {
                this.root[rootY] = rootX;
            } else if( this.rank[rootX] < this.rank[rootY] ) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
        
    }
    
    connected(x, y) {
        return this.root[x] === this.root[y];
    }
}


var findCircleNum = function(isConnected) {
    let rows = isConnected.length, cols = isConnected[0].length;
    let ans = 0;
    
    const uf = new UnionFind(rows);
    
    for( let r = 0; r < rows; r++ ) {
        for( let c = 0; c < rows; c++ ) {
            if( r === c )
                continue;
            
            if( isConnected[r][c] )
                uf.union(r, c);
                
        }
    }
    
    console.log(uf)
    for( let i = 0; i < rows; i++  ) {
        if( uf.find(i) === i )
            ans++;
    }
    
    return ans;
};
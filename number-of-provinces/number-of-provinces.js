/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class unionFind{
    constructor(size) {
        this.root = new Array(size);
        
        for( let i=0; i < size; i++ ) {
            this.root[i] = i;
        }
    }
    
    find(x) {
        if( x === this.root[x] )
            return x
        
        return this.root[x] = this.find(this.root[x]);
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( rootX !== rootY )
            this.root[rootY] = rootX;
    }
    
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}



var findCircleNum = function(isConnected) {
    let rows = isConnected.length, cols = isConnected[0].length;
    const uf = new unionFind(rows);
    let ans = 0;
    
    for( let i=0; i < rows; i++ ) {
        for( let j=0; j < cols; j++  ) {
            if( i === j )
                continue
            if( isConnected[i][j] === 1 )
                uf.union(i, j)            
        }
    }
    
    for( let i=0; i < rows; i++ ) {
        if( uf.find(i) === i )
            ans++
    }
    
    return ans;
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let edges = [];
    let ans = 0;
    
    for( let i=0; i<points.length; i++ ) {
        for( let j=0; j<points.length; j++ ) {
            if( i === j ) continue;
            let val = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
            
            edges.push({ i, j, val });
        }
    }    
    edges.sort((a, b) => b.val - a.val );
    
    const uf = new UnionFind();
    uf.makeSet(points);
    
    while( edges.length ) {
        let current = edges.pop();
        let { i, j, val } = current;

        if( !uf.connected(i, j) ) {
            uf.union(i, j);
            ans += val
        }
    }
    // console.log(uf)
    
    return ans;
};

class UnionFind {
    constructor() {
        this.root = {};
        this.rank = {};
    }
    
    makeSet(points) {
        for( let i=0; i <points.length; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    
    find(x) {
        if( x === this.root[x] )
            return x;
        
        return this.root[x] = this.find(this.root[x]);
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( this.rank[rootX] > this.rank[rootY] ) {
            this.root[rootY] = rootX;
        } else if( this.rank[rootY] > this.rank[rootX] ) {
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
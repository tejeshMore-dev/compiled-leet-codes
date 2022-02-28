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
            
            edges.push({ p1: points[i], p2: points[j], val  });
        }
    }
    
    const minHeap = new MinHeap();
    
    for( let edge of edges ) {
        minHeap.add(edge, edge.val);
    }
    
    const uf = new UnionFind();
    uf.makeSet(points);
    
    // console.log(minHeap);
    // console.log(uf)
    while( minHeap.size ) {
        let current = minHeap.remove();
        let { node, val } = current;
        let { p1, p2 } = node;
        // console.log(p1, p2, val)
        
        let [x1, y1] = p1;
        let [x2, y2] = p2;
        
        if( !uf.connected(`${x1}-${y1}`, `${x2}-${y2}`) ) {
            uf.union(`${x1}-${y1}`, `${x2}-${y2}`);
            ans += val
        }
    }
    
    return ans;
};

class heapNode {
    constructor(node, val) {
        this.node = node;
        this.val = val;
    }    
}

class MinHeap {
    constructor() {
        this.data = [];
        this.size = 0;
    }
    
    add(node, val) {
        this.data.push( new heapNode(node, val) );
        let index = this.data.length-1;
        this.size++;
        
        while( index > 0 && this.data[index].val < this.data[getPI(index)].val ) {
            let temp = this.data[index];
            this.data[index] = this.data[getPI(index)];
            this.data[getPI(index)] = temp;
            index = getPI(index);
        }
        
        function getPI(index) {
            return Math.floor( (index-1)/2 );
        }
    }
    
    remove() {
        if( this.data.length === 0 )
            return null;
        
        this.size--;
        
        if( this.data.length === 1 )
            return this.data.pop();
        
        let min = this.data[0];
        let current = this.data.pop();
        this.data[0] = current;
        
        let i = 0, length = this.data.length;
        
        while( 1 ) {
            let lCI = i*2+1, rCI = i*2+2;
            let swap = null;
            
            if( lCI < length && this.data[lCI].val < current.val ) {
                swap = lCI;
            }
            
            if( rCI < length ) {
                if( ( !swap && this.data[rCI].val < current.val ) || 
                    (  swap && this.data[rCI].val < this.data[lCI].val  ))
                    swap = rCI;
            }
            
            if( swap === null ) break;
            
            this.data[i] = this.data[swap];
            this.data[swap] = current;
            i = swap;
        }
        
        return min;
    }
}

class UnionFind {
    constructor() {
        this.root = {};
        this.rank = {};
    }
    
    makeSet(points) {
        for( let point of points ) {
            let [x, y] = point;
            this.root[`${x}-${y}`] = `${x}-${y}`;
            this.rank[`${x}-${y}`] = 1;
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
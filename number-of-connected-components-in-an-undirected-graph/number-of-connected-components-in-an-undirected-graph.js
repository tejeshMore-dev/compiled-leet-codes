/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var root;
var rank;
var component;

class unionFind{
    constructor(size) {
        rank = new Array(size);
        root = new Array(size);
        component = size;
        
        for( let i=0; i <size; i++ ) {
            rank[i] = 1;
            root[i] = i
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
            component--;
            
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
    
    getComponentCount(){
        return component;
    }
    
}


var countComponents = function(n, edges) {
    const uf = new unionFind(n);
    
    for( let i=0; i < edges.length; i++ ) {
        let [ x, y ] = edges[i];
        uf.union(x, y);   
    }
    
    return uf.getComponentCount()
};
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var root

class unionFind {
    constructor(size) {
        root = new Array(size);
        
        for( let i=0; i < size; i++ )
            root[i] = i;
    }
    
    find(x) {
        if( x === root[x] )
            return x
        
        return root[x] = this.find(root[x]);
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if( rootX !== rootY ) {
            root[rootY] = rootX
        }
    }
}

var smallestStringWithSwaps = function(s, pairs) {
    const uf = new unionFind(s.length);
    let map = {};
    let ans = [];
    
    for( let i=0; i < pairs.length; i++ ) {
        let [x, y] = pairs[i];
        uf.union(x, y);
    }
    
    for( let i=0; i < s.length; i++ ) {
        if( !map[uf.find(i)] )
            map[uf.find(i)] = [];
        
        map[uf.find(i)].push(s[i]);
    }
    
    for( let key in map ) {
        map[key].sort((a, b) => {
            if (a < b) {
            return 1;
          }
          if (a > b) {
            return -1;
          }
        } );
    }
    
    // console.log(map)
    for( let i=0; i < s.length; i++ ) {
        let p = uf.find(i);
        // console.log(i, p, map[p])
        ans.push(map[p].pop());
    }
    
    return ans.join("");
};
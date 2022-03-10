/**
 * @param {number[]} nums
 * @return {number}
 */

class Trie {
    constructor() {
        this.root = [];
    }
    
    insert(num) {
        let node = this.root;
        for( let i=31; i >= 0; i-- ) {
            let bit = ( num >> i ) & 1;
            if( !node[bit] ) {
                node[bit] = []
            }
            node = node[bit];
        }
    }
    
    findMaximumXOR(num) {
        let node = this.root;
        let xOr = 0;
        
        for( let i=31; i >= 0; i-- ) {
            let bit = ( num >> i ) & 1;
            if( node[bit ^ 1 ] ) {                
                xOr += ( 1 << i );
                node = node[bit ^ 1];
            } else {
                node = node[bit];
            }
            
        }
        return xOr;
    }
}

var findMaximumXOR = function(nums) {
    const trie = new Trie();
    let max = 0;
    
    for( let num of nums ) {
        trie.insert(num);
    }
    
    for( let num of nums ) {
        max = Math.max(max, trie.findMaximumXOR(num));
    }
    
    return max;
};
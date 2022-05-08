/**
 * @param {number[]} nums
 * @return {number}
 */
class Trie {
    constructor() {
        this.root = {};
    }
    
    insert( num ) {
        let node = this.root;
        
        for( let i = 31; i >= 0; i-- ) {
            let bit = ( num >> i ) & 1;
            if( !node[bit] )
                node[bit] = [];
            
            node = node[bit];
        }
    }
    
    findXOR( num ) {
        let res = 0;
        let node = this.root;
        
        for( let i = 31; i >= 0; i-- ) {
            let bit = ( num >> i ) & 1;
            
            if( node[bit ^ 1] ) {
                res += ( 1 << i );
                node = node[bit ^ 1];                
            } else {
                node = node[bit];   
            }
        }
        
        return res;
    }
}

var findMaximumXOR = function(nums) {
    let ans = 0;
    const trie = new Trie();
    
    for( let num of nums ) {
        trie.insert(num);
    }
    
    for( let num of nums ) {
        ans = Math.max(trie.findXOR(num), ans);
    }
    
    return ans;
};
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
// /* Trie Node
class TrieNode {
    constructor(val) {
        this.val = val;
        this.childs = {};
        this.isEnd = false;
    }
}
// */

// /* Trie interface
class Trie {
    constructor() {
        this.root = new TrieNode("");
    }
    
    insert( word ) {
        let node = this.root;
        
        for( let char of word ) {
            if( !node.childs[char] )
                node.childs[char] = new TrieNode(char);
            
            node = node.childs[char];
        }
        
        node.isEnd = true;
    }
    
    getWordIndex( i, text ) {
        let start = i;
        let arr = [];
        let node = this.root;
        let char = text.charAt(i);
        
        while( node.childs[char] ) {
            node = node.childs[char];
            
            if( node.isEnd )
                arr.push([ start, i ]);   
            
            char = text.charAt(++i);
        }      
        return arr;
    }
}
// */

// /* Solution
var indexPairs = function(text, words) {
    const trie = new Trie();
    let ans = [];
    
    for( let word of words ) {
        trie.insert(word);
    }  
    
    for( let i in text ) {
        let char = text.charAt(i);
        ans.push( ...trie.getWordIndex(parseInt(i), text) );
    }  
    
    return ans;
};
// */
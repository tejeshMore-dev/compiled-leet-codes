/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
class TrieNode {
    constructor(val) {
        this.childs = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert( word ) {
        let node = this.root;
        
        for( let char of word ) {
            if( !node.childs[char] )
                node.childs[char] = new TrieNode();
            
            node = node.childs[char];
        }
        
        node.isEnd = true;
    }
    
    hasChild( char ) {
        return this.root.childs[char]
    }
    
    dfs( i, text ) {
        let arr = [];
        let node = this.root;
        
        helper(i, text, node);
        
        function helper(i, text, node) {
             if( node.isEnd )
                arr.push(i-1)
            
            if( !node.childs[text.charAt(i)] )
               return;
            
            helper( i+1, text, node.childs[text.charAt(i)] );
        }        
        return arr;
    }
}

var indexPairs = function(text, words) {
    const trie = new Trie();
    let ans = [];
    
    for( let word of words ) {
        trie.insert(word);
    }  
    
    for( let i in text ) {
        let char = text.charAt(i);
        
        if( trie.hasChild(char) ) {
            let indexArray = trie.dfs(parseInt(i), text);
            for( let index of indexArray ) {
                ans.push( [ i, index  ] );
            }
        }
    }  
    
    return ans;
};
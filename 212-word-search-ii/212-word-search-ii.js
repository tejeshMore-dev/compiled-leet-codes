/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
    constructor(val) {
        this.val = val;
        this.childs = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode("");
    }
    
    insertWords(words){
        for( let word of words ) {
            let node = this.root;
            for( let char of word ) {
                if( !node.childs[char] )
                    node.childs[char] = new TrieNode(char);
                
                node = node.childs[char];
            }
            node.isEnd = true;
        }
    }
    
}

var findWords = function(board, words) {
    let rows = board.length;
    let cols = board[0].length;
    let ans = new Set();;
    let visitedChar = new Set();
    
    const trie = new Trie();
    trie.insertWords(words);
    for( let r=0; r < rows; r++ ) {
        for( let c=0; c < cols; c++ ) {
            serachWord( r, c, [], trie.root );
        }
    }
    
    let res = [];
    for( let i in words ) {
        if( ans.has( words[i] ) ) {
            res.push(words[i])
        }
    }
    return res;
    
    function serachWord( r, c, word, node ) {
        if( r < 0 || c < 0 || r >= rows || c >= cols || visitedChar.has( `${r}-${c}` ) || !node.childs[board[r][c]] )
            return;

        visitedChar.add( `${r}-${c}` );
        node = node.childs[board[r][c]];
        word.push( board[r][c] );
        if( node.isEnd )
            ans.add(word.join(""));
        
        serachWord(r+1, c, word, node);
        serachWord(r-1, c, word, node);
        serachWord(r, c+1, word, node);
        serachWord(r, c-1, word, node);
        
        word.pop()
        visitedChar.delete( `${r}-${c}` );
    }
};
class Node {
    constructor(val) {
        this.val = val;
        this.childrens = {};
        this.isEndOfWord = false;
    }
}

var Trie = function() {
    this.root = new Node(" ");
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for( let char of word ) {
        if( !node.childrens[char] )
            node.childrens[char] = new Node(char)
        node = node.childrens[char]
    }
    
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    
    for( let char of word ) {
        if( !node.childrens[char] )
            return false
        node = node.childrens[char]
    }
    
    return node.isEndOfWord;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    
    for( let char of prefix ) {
        if( !node.childrens[char] )
            return false
        node = node.childrens[char]
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
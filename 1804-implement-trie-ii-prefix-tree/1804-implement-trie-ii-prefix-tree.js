class Node {
    constructor(val) {
        this.val = val;
        this.childs = {};
        this.endC = 0;
        this.charC = 0;
    }
}


var Trie = function() {
    this.root = new Node("");
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for( let char of word ) {
        if( !node.childs[char] ) {
            node.childs[char] = new Node(char);
        }
        node = node.childs[char];
        node.charC += 1;
    }
    node.endC += 1;
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    let node = this.root;
    
    for( let char of word ) {
        if( !node.childs[char] )
            return 0
        
        node = node.childs[char];
    }
    return node.endC
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    let node = this.root;
    
    for( let char of prefix ) {
        if( !node.childs[char] )
            return 0
        
        node = node.childs[char];
    }
    return node.charC
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    let node = this.root;
    
    for( let char of word ) {
        node = node.childs[char];
        node.charC -= 1;
    }
    node.endC -= 1;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
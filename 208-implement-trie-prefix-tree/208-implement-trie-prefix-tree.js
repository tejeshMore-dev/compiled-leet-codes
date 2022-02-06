class Node {
	constructor(val) {
        this.val = val;
        this.childs = {};
        this.isEnd = false;
    }
}


var Trie = function() {
    this.root = new Node( "" );
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

	for( let char of word ) {
        if( !node.childs[char] )
            node.childs[char] = new Node(char);
	
        node = node.childs[char];
    }

    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
	
	for( let char of word ) {
		if( !node.childs[char] )
			return false

		node = node.childs[char]
    }
	
	return node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
	
	for( let char of prefix ) {
		if( !node.childs[char] )
			return false

		node = node.childs[char]
    }
	
	return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


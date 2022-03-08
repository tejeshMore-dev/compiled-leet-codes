class Node {
    constructor(val ) {
        this.val = val;
        this.childs = {};
        this.isEnd = false;
    }
}

var WordDictionary = function() {
    this.root = new Node("");
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    
    for( let char of word ) {
        if( !node.childs.hasOwnProperty(char) )
            node.childs[char] = new Node(char);
        
        node = node.childs[char];
    }
    
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return _search(0, this.root);
    
    function _search( start, node ) {
        for( let i = start; i < word.length; i++ ) {
            let char = word[i];
            
            if( !node.childs[char] ) {
                if( char == "." ) {
                    for( let child of Object.keys(node.childs) ) {
                        if( _search( i+1, node.childs[child] ) )
                            return true;
                    }
                }
                
                return false;
            } else {
                node = node.childs[char];                
            }
        }
        
        return node.isEnd;
    } 
    

};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
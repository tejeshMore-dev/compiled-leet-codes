/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
    this.str = compressedString;
    this.pointer = 0;
    this.count = 0;
    this.char = " ";
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    if( !this.hasNext() )
        return " ";
    
    if( this.count === 0 ) {
        this.char = this.str[this.pointer++];
        while( this.pointer < this.str.length && 
              !isNaN(this.str[this.pointer]) ) {
            
            this.count = this.count * 10 + parseInt(this.str[this.pointer++])
        }
    } 
    this.count--;
    return this.char;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    return ( this.pointer < this.str.length -1 || this.count > 0)
};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
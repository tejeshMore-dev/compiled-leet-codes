/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};


LRUCache.prototype.get = function(key) {
    if( this.map.has(key) ) {
        let temp = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, temp);
        return temp;
    }
    
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    
    if( this.map.has(key) ) {
        this.map.delete(key);
    } else if( this.capacity === this.map.size  ) {
        this.map.delete(this.map.keys().next().value)              
    }
    this.map.set(key, value);
};
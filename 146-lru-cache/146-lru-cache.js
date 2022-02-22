/**
 * @param {number} capacity
 */

var _map;
var _capacity;

var LRUCache = function(capacity) {
    _capacity = capacity;
    _map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if( _map.has(key) ) {
        let temp = _map.get(key);
        _map.delete(key);
        _map.set(key, temp);
        return temp;
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    if( _map.has(key) ) {
        _map.delete(key);
    } else if( _capacity === _map.size  ) {
        _map.delete(_map.keys().next().value)              
    }
    _map.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
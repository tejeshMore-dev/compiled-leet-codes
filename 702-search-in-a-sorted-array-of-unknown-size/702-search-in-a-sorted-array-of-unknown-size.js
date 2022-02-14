/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    if( reader.get(0) === target )
        return 0;
    
    let l = 0, r = 1;
    
    while( reader.get(r) < target ) {
        l = r;
        r <<= 2;
    
    }
    let result = -1;
    
    while( l <= r ) {
        let mid = Math.floor( l + (r-l)/2 );
        
        let midVal = reader.get(mid);
        
        if( midVal === target )
            return result = mid;
        else if( midVal > target )
            r = mid-1
        else
            l = mid+1
    }
    
    return result;
};
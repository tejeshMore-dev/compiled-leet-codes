/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// /* usin MAP TC:O(N) SC:O(N)
var isAnagram = function(s, t) {
    if( s.length !== t.length )
        return false;
    
    let map = new Map();
    
    for( let c of s ) {
        if( !map.has(c) )
            map.set(c, 0);
        
        map.set(c, map.get(c)+1);
    }
    
    for( let c of t ) {
        if( !map.has(c) || map.get(c) === 0 )
            return false;
        
        map.set(c, map.get(c)-1);
    }
    
    return true
};
// */
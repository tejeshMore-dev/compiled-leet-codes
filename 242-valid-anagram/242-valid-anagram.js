/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if( s.length !== t.length )
        return false;
    
    let sMap = {};
    
    for( let c of s ) {
        if( !sMap[c] )
            sMap[c] = 0
        
        sMap[c] = sMap[c] + 1;
    }
    
    for( let c of t ) {
        if( !sMap[c] )
            return false
        
        sMap[c] = sMap[c] +- 1;
    }
    
    return true
};
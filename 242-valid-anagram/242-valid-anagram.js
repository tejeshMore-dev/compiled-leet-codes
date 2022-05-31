/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = {};
    
    for( let char of s ) {
        if( !sMap[char] )
            sMap[char] = 0;
        
        sMap[char] += 1;         
    }
    
    for( let char of t ) {
        if( !sMap[char] )
            return false;
        
        sMap[char] -= 1;
        if( sMap[char] === 0 )
            delete sMap[char]
    }
    
    return Object.keys(sMap).length === 0
};
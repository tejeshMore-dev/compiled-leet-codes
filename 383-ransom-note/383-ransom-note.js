/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {};
    
    for( let char of magazine ) {
        if( !map[char] )
            map[char] = 0;
        
        map[char] += 1;
    }
    
    for( let char of ransomNote ) {
        if( !map[char] )
            return false;
        
        map[char] -= 1;
    }
    
    return true;
};
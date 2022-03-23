/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    let cache = new Map();
    return solve(s1, s2);
    
    function solve( s1, s2 ) {
        if( s1.length === 1 )
            return s1 === s2;
        
        if( s1 === s2 )
            return true;
        
        let key = `${s1}-${s2}`;
        if( cache.has(key) )
            return cache.get(key);
        
        let len1 = s1.length
        for( let i=1; i < s1.length; i++ ) {
            if( ( solve(s1.substring(0, i), s2.substring(0, i)) && solve(s1.substring(i), s2.substring(i)) ) ||
               ( solve(s1.substring(0, i), s2.substring(len1-i)) && solve(s1.substring(i), s2.substring(0, len1-i)) )
              ) {
                cache.set(key, true);
                return true
            }
             
        }
        cache.set(key, false);
        return false;
    }
};
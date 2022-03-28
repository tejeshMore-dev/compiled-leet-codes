/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
    
    for( let i=0; i < s.length; i++ ) {
        l = r = i;
        while( l >= 0 && r < s.length && s[l] === s[r] ) {
            res += 1;
            l--;
            r++
        }
        
        l = i, r = i+1;
        while( l >= 0 && r < s.length && s[l] === s[r] ) {
            res += 1;
            l--;
            r++
        }
    }
    
    return res
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if( !s[0] ) return true
    
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();        
    let lp = 0, rp = s.length-1, result = true;

    while( lp < rp ) {
        if( s[lp++] !== s[rp--] )
            return result = false    
    }
    
    return result
};
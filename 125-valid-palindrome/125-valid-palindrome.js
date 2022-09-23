/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let lp = 0, rp = s.length-1;
    let result = true;
    
    while( lp < rp ) {
        while( lp < rp && !isAlphaNumeric(s[lp]) )
            lp++;
        
        while( lp < rp && !isAlphaNumeric(s[rp]) )
            rp--;
        
        if( s[lp] !== s[rp] )
            return result = false;
        
        lp++;
        rp--;
    }
    
    return result
};

const isAlphaNumeric = function (char) {
    return ( char >= 'a' && char <= 'z') || ( char >= '0' && char <= '9' );
}
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if( s.length <= 2 )
        return true;
    
    return findValidPalindrome(s, 0, s.length-1, 0, 1)
    
    function findValidPalindrome( s, l, r, delCount, maxDelCount ) {
        if( delCount > maxDelCount )
            return false;
        
        if( l >= r )
            return true;
        
        if( s[l] === s[r] ) {
           return findValidPalindrome(s, l+1, r-1, delCount, maxDelCount  ) 
        } else {
            let res = findValidPalindrome(s, l+1, r, delCount+1, maxDelCount) ||
           findValidPalindrome(s, l, r-1, delCount+1, maxDelCount  )
            return res;
        }
    }
};
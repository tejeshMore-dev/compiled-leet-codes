/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	let count = 0;
	return isPalindrome( 0, s.length-1 );
	
	// check for isPalindrome 
	function isPalindrome ( lp, rp ) {
        if ( lp >=  rp )
            return true 	
        
        if( s.charAt(lp) === s.charAt(rp) ) 
            return isPalindrome(lp+1, rp-1);
        else {
            if(count++ < 1) 
                return isPalindrome(lp + 1, rp) || isPalindrome(lp, rp-1)
            else 
                return false
        }
    }
	
};

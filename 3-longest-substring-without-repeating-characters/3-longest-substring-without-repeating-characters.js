/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lp = 0, rp = 0, ans = 0, set = new Set();
    
    while( rp < s.length ) {
        if( set.has(s.charAt(rp)) ) {
            while( set.has(s.charAt(rp)) ) {
                delete set.delete(s.charAt(lp))
                lp++
            }
        }
        
        set.add(s.charAt(rp)); 
        ans = Math.max( ans, rp-lp+1 )
        rp++;
    }
    
    return ans;
};
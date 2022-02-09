/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // initialize data 
    let lp = 0, rp = 0, ans = 0, set = new Set();
    
    while( rp < s.length ) {
        if( set.has(s.charAt(rp)) ) {
            // if set have current value, 
            // then need to remove all value till current value first apperance
            while( set.has(s.charAt(rp)) ) {
                delete set.delete(s.charAt(lp))
                lp++
            }
        }
        // if set doesn't have current value then increase right pointer and update substring length
        set.add(s.charAt(rp)); 
        ans = Math.max( ans, rp-lp+1 )
        rp++;
    }
    
    return ans;
};
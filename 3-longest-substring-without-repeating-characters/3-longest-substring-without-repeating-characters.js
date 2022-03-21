/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // initialize data 
    let lp = 0, rp = 0, ans = 0, map = new Map();
    
    while( rp < s.length ) {
        if( map.has(s.charAt(rp)) ) {
            // if set have current value, 
            // then need to remove all value till current value first apperance
            lp = Math.max(map.get(s.charAt(rp)), lp);
       
        }
        // if set doesn't have current value then increase right pointer and update substring length
        ans = Math.max( ans, rp-lp+1 );
        map.set(s.charAt(rp), rp+1); 
        
        rp++;
    }
    
    return ans;
};
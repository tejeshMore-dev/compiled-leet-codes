/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let lp = 0, rp = 0, ans = 0, k = 2, counter = 0, map = {};
    
    while( rp < s.length ) {
        if( !map[s.charAt(rp)] ) {
            if( counter === k ) {
                while( counter === k ) {
                    map[s.charAt(lp)] = map[s.charAt(lp)] - 1;
                    if( map[s.charAt(lp)] === 0 ) {
                        delete map[s.charAt(lp)]
                        counter--;                        
                    }
                    lp++;
                }
            }
            
            counter++;
            map[s.charAt(rp)] = 0;
        }
        
        map[s.charAt(rp)] = map[s.charAt(rp)] + 1;
        ans = Math.max( ans, rp-lp+1 )
        rp++;
    }
    
    return ans
};
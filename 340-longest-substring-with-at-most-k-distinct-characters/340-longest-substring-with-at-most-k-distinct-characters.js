/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if( k === 0 )
        return 0
    
    let lp = 0, rp = 0, map = {}, counter = 0, ans = 0;
    
    while( rp < s.length ) {
        if( !map[s.charAt(rp)] ) {
            // if new char and distinct chars == k 
            if( counter === k ) {
                // remove char one by one from left (i.e lp), 
                // if any char count becomes 0, then need to delete it from hashmap and decrement distinct chars counter
                // once distinct chars counter decremented, we can have new distinct chat in sliding window
                while( counter >= k ) {
                    map[s.charAt(lp)] = map[s.charAt(lp)] - 1;
                    if( map[s.charAt(lp)] === 0 ) {
                        delete map[s.charAt(lp)]
                        counter--;                        
                    }
                    lp++;
                }
            }
            
            // if new char but distinct chars < k 
            counter++; // increment distinct chars counter
            map[s.charAt(rp)] = 0;
        }
        
        map[s.charAt(rp)]  = map[s.charAt(rp)] + 1; // increase frequency in hashmap
        ans = Math.max( ans, rp-lp+1 );
        rp++;
    }
    
    return ans;
};
    
    
/*


not exist

counter === k

delete key
update lp
counter--;


inc in map
update ans
counter++
rp++







exist 

inc in map;
update ans
rp++
















*/
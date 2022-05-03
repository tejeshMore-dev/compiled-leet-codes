/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lp = 0, map = new Map(), ans = 0;
    
    for( let rp = 0; rp < s.length; rp++ ) {
        let char = s[rp];
        if( map.has(char) ) {
            while( lp <= map.get(char) ) {
                map.delete(s[lp]);
                lp++;
            }
        }
        
        map.set(char, rp);
        ans = Math.max( ans, rp - lp + 1 );
    }
    
    return ans;
};
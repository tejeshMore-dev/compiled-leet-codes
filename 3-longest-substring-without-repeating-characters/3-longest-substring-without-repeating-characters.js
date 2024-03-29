/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if( s.length < 2 )
        return s.length;
    
    let lp = 0, rp=lp; 
    let res = 1;
    let set = new Set();
    
    while( rp < s.length ) {
        while( set.has(s[rp]) ) {
            set.delete(s[lp]);
            lp++;
        }
        
        res = Math.max(res, rp-lp+1);
        set.add(s[rp]);
        rp++;
    }
    
    return res;
};
/*
"dabcabcbb"


b
c
a
  l r
dabca

3
*/
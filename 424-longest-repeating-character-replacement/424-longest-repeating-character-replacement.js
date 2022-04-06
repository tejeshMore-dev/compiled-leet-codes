/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let lp = 0, map = {}, res = 0, maxF = 0;

    for( let rp in s ) {
        let char  = s[rp];
        if(  !map[char] )
            map[char] = 0;
        
        map[char] += 1;
        
        maxF = Math.max( maxF, map[char] )
        while( rp-lp+1 - maxF > k ) {
            map[s[lp]] -= 1;
            lp++;
        }
                
       res = Math.max( res, rp-lp+1 ); 
    }
    
    return res;
};
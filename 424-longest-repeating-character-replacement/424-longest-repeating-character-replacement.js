/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let lp = 0;
    let map = {};
    let res = 0;

    for( let rp in s ) {
        let char  = s[rp];
        if(  !map[char] )
            map[char] = 0;
        
        map[char] += 1;
        
        while( rp-lp+1 - Math.max( ...Object.values(map) ) > k ) {
            map[s[lp]] -= 1;
            lp++;
        }
                
       res = Math.max( res, rp-lp+1 ); 
    }
    
    return res;
};
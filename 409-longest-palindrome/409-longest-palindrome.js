/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sMap = {};
    
    for( let char of s ) {
        if( !sMap[char] )
            sMap[char] = 0;
        
        sMap[char] += 1;
    }
    
    let ans = 0, c = 0;
    for( let key in sMap ) {
        let count = sMap[key];
        c += count%2;
        ans += ( Math.floor(count/2) * 2 );
    }
    
    return ans + (c ? 1 : 0);
};
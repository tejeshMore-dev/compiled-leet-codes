/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length).fill(-1)
    return helper( 0 )
    
    function helper( i ) {
        if( i === s.length ) {
            return 1;
        }
        
        if( s[i] === "0" ) {
            return 0;
        }
        
        if( dp[i] !== -1  )
            return dp[i];
        
        res = helper(i+1); 
        if( i+1 < s.length && ( s[i] === "1" || s[i] === "2"  && "0123456".includes(s[i+1])) )
            res += helper(i+2); 
        
        dp[i] = res;
        return res;
    }
};
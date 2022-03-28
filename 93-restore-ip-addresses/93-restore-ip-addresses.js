/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ans = [];
    const MAX = 256;
    const TOTAL_DOTS = 4;
    const MAX_DIGIT = 3;
    backtrack(0, 0, []);
    return ans;
    
    function backtrack( i, dots, combination ) {
        if( i === s.length && dots === TOTAL_DOTS ){
            combination.pop();
            ans.push( combination.join("") );
            return;
        }
        
        if( i >= s.length || dots >= TOTAL_DOTS  )
            return;
        
        
        for( let j=i; j < Math.min(i+MAX_DIGIT, s.length); j++ ) {
            let val = parseInt( s.substring(i, j+1));
            if( val < MAX && ( i === j || s[i] !== "0" ) )
                backtrack(j+1, dots+1, [ ...combination, val, "." ] )
        }
    }
};
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let ans = [];
    helper( 0, [] );
    return ans;
    
    function helper( i, res ) {
        if( i === s.length ) {
            ans.push(res.join(""));
            return;
        }
        
        if( Number.isInteger(parseInt(s[i])) ) {
            res.push(s.charAt(i))
            helper( i+1, res );
            res.pop();
        } else {
            res.push(s.charAt(i).toLowerCase())
            helper( i+1, res )
            res.pop();
            
            res.push( s.charAt(i).toUpperCase() )
            helper( i+1, res )
            res.pop();
        }
                
    }
};
/*

a1b2

i=0
a1b2 A1b2

i=1
// skip as not letter
i=2
a1b2 a1B2 A1b2 A1B2

i=3























*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
    helper(0, 0, []);
    return ans;
    
    function helper( oB, cB, temp ) {
        if( temp.length === n*2 )
            return ans.push( temp.join("") )
        
        if( oB < n ) {
           helper( oB + 1, cB, [ ...temp, "(" ] )
        }
        
        if( cB < oB ) {
           helper( oB, cB + 1, [ ...temp, ")" ] )
        }        
    }
};

























/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if( digits.length === 0 )
        return []
    
    let result = [];
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9" :"wxyz"
    }
    
    function backtrack(i, comb ) {
        if( i === digits.length  ) {
            result.push(  comb. join("") );
            return
        }
        
        for( let char of map[digits[i]] ) {
            backtrack( i+1, [ ...comb, char ] );
        }
    }
    
    backtrack( 0, [] );
    return result;
};
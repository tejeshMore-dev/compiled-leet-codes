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
    let comb = [];
    
    function backtrack(i) {
        if( i === digits.length ) {
            result.push([ ...comb ].join(""));
            return;
        }
        
        for( let char of map[digits[i]] ) {
            comb.push(char);
            backtrack(i+1);
            comb.pop();
        }
    }
    
    backtrack( 0 );
    return result;
};
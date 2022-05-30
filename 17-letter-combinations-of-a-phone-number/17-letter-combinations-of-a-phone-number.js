/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if( digits.length === 0 )
        return []
    
    let result = [], temp = [];
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
    
    findCombination(0);
    return result;
    
    function findCombination( i ) {
        if( i === digits.length ) {
            result.push( temp.join("") );
            return;
        }
        
        for( let char of map[digits[i]] ) {
            temp.push( char );
            findCombination(i+1);
            
            temp.pop();
        }
    }
};
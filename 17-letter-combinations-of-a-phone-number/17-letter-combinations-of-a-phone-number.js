/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length)
        return [];
    
    let letterMap = {
        '2': ["a", "b", "c"],
        '3': ["d", "e", "f"],
        '4': ["g", "h", "i"],
        '5': ["j", "k", "l"],
        '6': ["m", "n", "o"],
        '7': ["p", "q", "r", "s"],
        '8': ["t", "u", "v"],
        '9': ["w", "x", "y", "z"]
    };
    let res = [];
    findLetterCombinations(0, []);
    return res;
    
    function findLetterCombinations(i, current) {
        if( i === digits.length ) {
            res.push(current.join(""));
            return;
        }
        
        
        for( let char of letterMap[digits[i]] ) {
            findLetterCombinations(i+1, [ ...current, char ] )
        }
    }
};

/*
2 : [ a b c ]
3: [ d e f ]



9: [w x y z]

"23"

i
0
[a] [b] [c]

1
[ad] [ae] [af]
*/
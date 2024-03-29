/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let mapOfBrackets =  {
        "}": "{",
        ")": "(",
        "]": "[",
    }
    
    for( let char of s ) {
        if( mapOfBrackets.hasOwnProperty(char) ) {
            if( stack.length && mapOfBrackets[char] === stack[stack.length-1] )
                stack.pop();
            else
                return false;
        } else 
            stack.push(char);
    }
    
    return stack.length === 0
};

/*
 |
"([]())"

50

1 - 50
[]
*/
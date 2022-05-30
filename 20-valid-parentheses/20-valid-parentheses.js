/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    let stack = [];
    
    for( let char of s ) {
        if( !bracketMap.hasOwnProperty(char) ) {
            stack.push(char);
        } else {
            if( !stack.length || stack[stack.length-1] !== bracketMap[char])
                return false;
            
            stack.pop();
        }
    }
    
    return !stack.length;
};
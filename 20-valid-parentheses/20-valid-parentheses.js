/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    let map = { 
        ")" : "(",
        "]" : "[", 
        "}" : "{"
    }
    
    for( let char of s ) {
        if( !map[char] )
            stack.push(char);
        else {
             if( !stack[0] || map[char] !== stack.pop() ) return false
        }        
     
    };
    
    return !stack[0]
};
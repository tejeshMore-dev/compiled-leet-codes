/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let eval = {
        "+": (a, b) => {
            return a + b;
        },
        "-": (a, b) => {
            return a - b;
        },
        "*": (a, b) => {
            return a * b;
        },
        "/": (a, b) => {
            return ~~(a/b);
        }
    }
    let stack = [];
    
    for( let token of tokens ) {
        if( eval[token] ) {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(eval[token](a, b))
        } else {
            stack.push(~~token);
        }
    }
    
    return stack[0];
};
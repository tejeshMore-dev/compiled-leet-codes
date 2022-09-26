/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let map = {
        "+" : function(a, b) {
            return a+b;
        },
        "-" : function(a, b) {
            return a-b;
        },
        "*" : function(a, b) {
            return a*b;
        },
        "/" : function(a, b) {
            return Math.trunc(a/b);
        }
    }
    let stack = [];
    
    for( let token of tokens ) {
        if( map.hasOwnProperty(token) ) {
            let b = stack.pop();
            let a = stack.pop();
            
            stack.push(map[token](a, b));
        } else {
            stack.push(+token);
        }
    }
    
    return stack[0];
};

/*
["2","1","+","3","*"]

9

["4","13","5","/","+"]


2
4

["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

22

*/
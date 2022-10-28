/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    let map = {
        "+": function() {
            let a =  stack[stack.length-1];
            let b =  stack[stack.length-2];
            
            stack.push(a+b);
        },
        "D": function() {
            let a = stack[stack.length-1];
            
            stack.push(a*2);
        },
        "C": function() {
            stack.pop();
        }
    }
    
    for( let operation of operations ) {
        if( map.hasOwnProperty(operation) ) {
            map[operation]();
        } else
            stack.push(+operation);
        
    }
    return stack.reduce((sum, record) => sum+record, 0)
};
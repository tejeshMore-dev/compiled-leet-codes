/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    
    stack.push(0)

    for( let i=1; i < temperatures.length; i++ ) {
        while ( stack.length &&  temperatures[i] > temperatures[stack[stack.length-1]]) {
            let index = stack.pop();
            result[index] = i-index; 
        }
        
        stack.push(i);
    }
    
    return result
};
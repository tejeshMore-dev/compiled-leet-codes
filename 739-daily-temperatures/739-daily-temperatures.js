/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length); 
    result.fill(0);
    let stack = [];
    
    stack.push({ index: 0, temp: temperatures[0] })
    let pointer = 0;

    for( let i=1; i<temperatures.length; i++ ) {
        while ( stack.length > 0 &&  temperatures[i] > stack[pointer].temp) {
            let {index, temp} = stack.pop();
            result[index] = i-index; 
            pointer--
        }
        
        stack.push({ index: i, temp: temperatures[i] })
        pointer++;
    }
    
    return result
};
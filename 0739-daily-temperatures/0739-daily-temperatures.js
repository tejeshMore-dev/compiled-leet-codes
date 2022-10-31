/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let res = new Array(temperatures.length), ri = temperatures.length-1;
    
    for( let i=temperatures.length-1; i>=0; i-- ) {
        let temptemperature = temperatures[i];
        
        if( !stack.length )
            res[ri] = 0;
        else if(  temptemperature >= stackTop() ) {
            while( stack.length && temptemperature >= stackTop() ){
                stack.pop();
            }
            
            if( !stack.length )
                res[ri] = 0;
            else
                res[ri] = stack[stack.length-1][1]-i;
        } else {
            res[ri] = 1;
        }
        
        ri--;
        stack.push([ temptemperature, i ]);
    }
    
    return res;
    
    function stackTop(){
        return stack[stack.length-1][0];
    }
};
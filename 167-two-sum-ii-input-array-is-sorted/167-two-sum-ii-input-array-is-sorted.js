/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lp = 0, rp = numbers.length-1;
    let result = [ -1, -1];
    
    while( lp <  rp) {
        let sum = numbers[lp] + numbers[rp];
        if( sum === target )
            return result = [ lp+1, rp+1 ];
        else if( sum < target )
            lp++;
        else
            rp--;
    }
    
    return result;
};
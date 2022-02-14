/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lp = 0;
    let rp = numbers.length-1;
    
    while( lp<rp ) {
        let sum = numbers[rp] + numbers[lp];
        
        if( sum === target )
            return [lp+1,rp+1]
        else if ( sum > target )
            rp--
        else
            lp++
    }
};
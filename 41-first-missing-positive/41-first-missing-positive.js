/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let set = new Set();
    
    for( let num of nums ) {
        if( num > 0 )
            set.add(num);
    }
    
    let i = 1;
    while( set.has(i) ) {
        i++;
    }
    
    return i
};

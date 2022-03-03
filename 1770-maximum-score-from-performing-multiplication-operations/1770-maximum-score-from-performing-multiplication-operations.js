/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    let cache = new Array(multipliers.length).fill(0).map( a => new Array(multipliers.length).fill(0) );
    let length = nums.length;
    return helper( 0, 0, nums.length-1);
    
    function helper( i, l ) {
        if( i === multipliers.length )
            return 0;
        
        if( cache[i][l] )
            return cache[i][l];
        
        let r = length - 1 - ( i - l );
        
        let opt1 = multipliers[i] * nums[l] + helper( i+1, l+1 );
        let opt2 = multipliers[i] * nums[r] + helper( i+1, l );
        return cache[i][l] = Math.max( opt1, opt2 );
    }
};
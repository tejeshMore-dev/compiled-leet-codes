/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    nums.sort((a, b) => a-b );
    let cache = new Array(nums.length).fill(-1);
    // console.log(nums);
    return helper(0);
    
    function helper(i) {
        if( i >= nums.length )
            return 0;
        
        if( cache[i] > -1 )
            return cache[i];
        
        let num = nums[i];
        let j = i, sum = 0;
        while( num === nums[j] ) {
            sum += nums[i];
            j++;
        }
        let k = j;

        num = num+1;
        while( num === nums[j] ) {
            j++;
        }
        let opt1 = helper(j) + sum;
        let opt2 = helper(k);
        // console.log(i, opt1, opt2)
        cache[i] = Math.max(opt1, opt2)
        return cache[i];
    }
    
};
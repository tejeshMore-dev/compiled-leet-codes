/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// /* Approach 2
var sortColors = function(nums) {
    let lp = 0, mid = 0, rp = nums.length-1;
    
    while( mid <= rp ) {
        if( nums[mid] === 0 ) {
            swap(lp, mid);
            lp++;
            mid++;
        } else if( nums[mid] === 2 ) {
            swap(rp, mid);
            rp--;
        } else {
            mid++;            
        }
    }
    
    function swap( p1, p2 ) {
        let temp = nums[p1];
        nums[p1] = nums[p2];
        nums[p2] = tamp;
    }
    
};
// */

// /* Approach 1
var sortColors = function(nums) {
    let map = { 0:0, 1:0, 2:0 }
    
    for( let num of nums ) {
        map[num] = map[num] + 1;
    }
    
    let i = 0;
    for( let key in map ) {
        let count = map[key];
        while( count ) {
            nums[i++] = key;
            count--;
        }
    }
};
// */
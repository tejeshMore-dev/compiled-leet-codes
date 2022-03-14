/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let can1 = null, can2 = null, count1 = 0, count2 = 0;
    
    for( let num of nums ) {
        if( can1 === num ) {
            count1++;
        } else if( can2 === num ) {
            count2++;
        } else if( count1 === 0 ) {
            can1 = num;
            count1 = 1;
        } else if( count2 === 0 ) {
            can2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    
    let ans = [];
    count1 = 0;
    count2 = 0;
    
    for( let num of nums ) {
        if( num === can1 ) {
            count1++;
        } else if( num === can2 ) {
            count2++;
        }
    }
    let n = Math.floor(nums.length/3);
    if( count1 > n )
        ans.push(can1);
    
    if( count2 > n )
        ans.push(can2);
    
    return ans;
};
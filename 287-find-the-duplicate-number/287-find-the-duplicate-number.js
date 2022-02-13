/**
 * @param {number[]} nums
 * @return {number}
 */

// var findDuplicate = function(nums) {
//     let sp = nums[0], fp = nums[nums[0]];
    
//     while( sp !== fp ) {
//         sp = nums[sp];
//         fp = nums[nums[fp]];
//     }
    
//     fp = 0;
//      while( sp !== fp ) {
//         sp = nums[sp];
//         fp = nums[fp];
//     }
    
//     return sp;
// };

var findDuplicate = function(nums) {
    let duplicate = -1;
    
    for( let i = 0; i < nums.length; i++ ) {
        let val = Math.abs(nums[i]);
        if( nums[val] < 0 ) {
            duplicate = val
            break
        }
        nums[val] = nums[val] * -1
    }
    
    for( let i = 0; i < nums.length; i++ ) {
        nums[i] = Math.abs(nums[i]);
    }
    
    return duplicate;
}



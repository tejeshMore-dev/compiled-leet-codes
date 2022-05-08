/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [], temp = [];
    findPermutation( new Array(nums.length).fill(false) );
    return ans;
    
    function findPermutation( used ) {
        if( temp.length === nums.length ) {
            ans.push( [ ...temp ] );
            return;
        }
        
        for( let index = 0; index < nums.length; index++ ) {
            if( used[index] )
                continue;
            
            temp.push( nums[index] );
            used[index] = true;
            findPermutation( used );
            
            temp.pop();
            used[index] = false;
        }
    }
};
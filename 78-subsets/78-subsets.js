/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // TC: O( N * 2^N )
    // SC: O( N )
    let set = [], result = [];
    findSubSets( 0 );
    return result;
    
    function findSubSets( i ) {
        if( i === nums.length ) {
            result.push( [ ...set ] );
            return;
        }
        
        set.push( nums[i] );
        findSubSets( i+1 );
        set.pop();
        findSubSets( i+1 );
    }
};
















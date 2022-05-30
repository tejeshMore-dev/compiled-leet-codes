/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [], temp = [];
    findSubSet(0);
    return ans;
    
    function findSubSet( i ) {
        if( i === nums.length ) {
            ans.push( [ ...temp ] );
            return;            
        }
        
        temp.push( nums[i] );
        findSubSet(i+1);
        
        temp.pop();
        findSubSet(i+1);
    }
    
};
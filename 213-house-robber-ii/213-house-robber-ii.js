/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {    
    let opt1 = helper(0, nums.length-1);
    let opt2 = helper(1, nums.length);
    
    return Math.max( nums[0], opt1, opt2 );
        
    function helper( s, e ) {
        let rob1 = 0;
        let rob2 = 0;

        for( let i=s; i < e; i++ ) {
            let temp = Math.max( rob2, nums[i] + rob1 );
            rob1 = rob2;
            rob2 = temp
        }
        return rob2;
    }
};
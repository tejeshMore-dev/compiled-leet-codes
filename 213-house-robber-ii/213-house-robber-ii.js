/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {    
    let temp = nums.shift();
    let opt1 = helper(nums);
    
    nums.unshift(temp);
    temp = nums.pop();
    let opt2 = helper(nums);
    nums.push(temp);
    
    return Math.max( nums[0], opt1, opt2 );
        
    function helper( arr ) {
        let rob1 = 0;
        let rob2 = 0;

        for( let i=0; i <arr.length; i++ ) {
            let temp = Math.max( rob2, arr[i] + rob1 );
            rob1 = rob2;
            rob2 = temp
        }
        return rob2;
    }
};
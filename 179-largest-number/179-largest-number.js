/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        if( parseInt(`${a}${b}`) > parseInt(`${b}${a}`)  )
            return -1;
        else
            return 1;
    })
    if(nums[0] === 0)
        return "0";
    
    return nums.join("");
};
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = {};
    
    for( let i = 0; i<nums.length; i++ ) {
        let num  = nums[i];
        if( !this.map[num] ) {
            this.map[num] = [];
        }
        this.map[num].push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let arr = this.map[target];
    if( arr.length === 1 )
        return arr[0]
    
    let random =  Math.floor(Math.random() * arr.length);
    return arr[random];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */




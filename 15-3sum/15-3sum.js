/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if( nums.length === 0 )
        return [];
    
    let res = [];
    nums.sort((a, b) =>  a-b );
    
    for( let i = 0; i < nums.length-2; i++ ) {
        if( i === 0 || ( i > 0 && nums[i] !== nums[i-1] ) ) {
            let lp = i+1, rp = nums.length-1, sum = 0 - nums[i];
            
            while( lp < rp ) {
                let currSum = nums[lp] + nums[rp];
                if( currSum === sum ) {
                    res.push([ nums[i], nums[lp], nums[rp] ]);
                    
                    while( lp < rp && nums[lp] === nums[lp+1] ) {
                        lp++;                        
                    }
                    
                    while( lp < rp && nums[rp] === nums[rp-1] ) {
                        rp--;                        
                    }
                    
                    lp++;
                    rp--;
                } else if( currSum < sum ) {
                    lp++
                } else {
                    rp--;
                }
            }
        }
    }
    
    return res;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if( nums.length < 2 )
        return nums.length;
    
    let set =  new Set(nums);
    let res = 1;
    
    for( let num of nums ) {
        let currentMax = 1;
        
        if( !set.has(num-1) ) { // start    
            while( set.has(num+1) ) {
                currentMax++;
                num++;                
            }
        }
        
        res = Math.max(res, currentMax);
    }
    
    return res
};
/*
[100,4,200,1,3,2, 201, 101 
1 2 3 4 5 6 7 8
 
2 0 2 4 0 0 0


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    findPermute(0, new Array(nums.length).fill("-"));
    return res;
    
    function findPermute(index, current) {
        if(index === nums.length) {
            res.push(current);
            return;
        }
        
        
        for( let i=0; i<current.length; i++ ) {
            let char = current[i];
            
            if( char === "-" ) {
                let comb = [ ...current ]
                comb[i] = nums[index];
                findPermute(index+1, comb)
            }
        }
    }
};
/*
[- - -]

0
1-- 
-1- 
--1 

12-
1-2
21-
-12
2-1
-21

123
132
213
312
231
321
*/
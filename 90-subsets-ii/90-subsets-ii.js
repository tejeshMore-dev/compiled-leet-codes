/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    findSubsetsWithDup(0, [], res, false);
    return res;
    
    function findSubsetsWithDup(i, current, res, isNextSame) {
        if( i === nums.length ) {
            res.push(current);
            return;
        }
        
        if( !isNextSame )
            findSubsetsWithDup(i+1, current, res, isNextSame )
        
        findSubsetsWithDup(i+1, [ ...current, nums[i] ], res, checkNextSame(i) )
    }
    
    function checkNextSame(i){
        return ( i === nums.length-1 || nums[i] === nums[i+1] )
    }
};

/*
[1,2,2,2]

0
[] false
[] [1] false

1
[] [2] [1] [12]

2
[]

(i, current, res, )
sameAsPrev
isNextSame
*/
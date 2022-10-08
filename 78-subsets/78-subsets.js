/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    findSubset(0, [], res );
    return res;
    
    function findSubset(i, current, res) {
        if( i === nums.length ) {
            res.push([ ...current ]);
            return;
        }
        
        findSubset(i+1, current, res);
        findSubset(i+1, [ ...current, nums[i] ], res);
    }
};

/*
[1,2,3]
[]
[] [1]
[] [2] [1] [12]
[] [3] [2] [23] [1] [13] [12] [123]


current i

*/
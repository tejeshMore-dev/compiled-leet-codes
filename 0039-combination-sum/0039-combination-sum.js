/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [], current = [];
    findCombinationSum(0, 0);
    return res;
    
    
    function findCombinationSum(i, sum) {
        if( i === candidates.length || sum >= target ) {
            if ( sum === target ) {
                res.push([ ...current ]);
            }
            return;
        }
        
        current.push(candidates[i]);
        findCombinationSum(i, sum + candidates[i]);
        
        current.pop();
        findCombinationSum(i+1, sum);
    }
};
/*









*/
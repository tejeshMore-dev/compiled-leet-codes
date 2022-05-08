/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans= [];
    helper( 0, target, [] );
    return ans;
    
    function helper( i, target, combination ) {
        if( i === candidates.length || target <= 0 ) {
            if( target === 0 )
                ans.push( [ ...combination ] )
            
            return;
        }
        
        helper( i, target - candidates[i], [ ...combination, candidates[i] ] );        
        helper( i+1, target, [ ...combination ] );
    }
    
};
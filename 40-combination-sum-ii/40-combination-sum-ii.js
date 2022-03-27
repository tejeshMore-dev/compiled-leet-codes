/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a-b);
    let res = [], combination = [];
    
    function helper( i, remaining ) {
        if( remaining === 0 ) {
            res.push( [ ...combination ] );
            return;
        }
        
        if( i === candidates.length || remaining <= 0 )
            return;     
        
        let prev = -1;
        for( let pos = i; pos < candidates.length; pos++ ) {
            if( candidates[pos] === prev )
                continue;
            
            combination.push(candidates[pos]);
            helper(pos+1, remaining - candidates[pos]);
            
            combination.pop();
            prev = candidates[pos];
        }
    }
    
    helper( 0, target );
    return res;
};
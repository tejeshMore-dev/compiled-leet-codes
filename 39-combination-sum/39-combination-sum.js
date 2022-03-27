/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combinations = [], combination = [];
    
    function helper( i, remaining ) {
        if( remaining === 0 ) {
            combinations.push( [ ...combination ] );
            return;
        }
        
        if( i === candidates.length || remaining <= 0 )
            return;     
        
        
        // selected
        combination.push( candidates[i] );
        remaining -= candidates[i];
        helper( i, remaining );
        
        // not selected
        combination.pop();
        remaining += candidates[i];
        helper( i+1, remaining );
    }
    
    helper( 0, target );
    return combinations;
};

/*
2 3 6 7


[2]2 []0
[22]4 [2]2 [2]2 []























*/
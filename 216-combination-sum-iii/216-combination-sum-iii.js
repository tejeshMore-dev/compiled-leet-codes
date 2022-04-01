/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let combination = [], result = [];
    
    function helper( val, sum, used ) {
        if( combination.length === k && sum === n) {
            result.push([ ...combination ])
            return 
        }
        
        if( sum >= n || combination.length >= k || val > 9 )
            return 
        
        
        combination.push(val);
        helper( val+1, sum + val, used );
        combination.pop();
        
        helper( val+1, sum, used );
    }
    
    helper( 1, 0, Array(10).fill(false) );
    return result;
};



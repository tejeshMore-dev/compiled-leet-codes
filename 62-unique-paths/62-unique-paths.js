/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let r = 0, c = 0;
    let cache = {};
    return calculatePaths(r, c);
    
    function calculatePaths(r, c) {
        if(cache[`${r}-${c}`])
            return cache[`${r}-${c}`]
        
        if( r === m-1 && c === n-1  )
            return 1;
        
        if( r >= m || c >= n )
            return 0
        
        return cache[`${r}-${c}`] = calculatePaths( r+1, c ) + calculatePaths( r, c+1 ) 
    }
    
};
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let cache = new Map();
    return solve( i=0, j=0 );
    
    function solve(i, j) {
        if( i >= triangle.length || j >= triangle[i].length )
            return 0;
        
        if( cache.has(`${i}-${j}`) )
            return cache.get(`${i}-${j}`);
        
        let left = solve(i+1, j);
        let right = solve(i+1, j+1);
        let ans = triangle[i][j] + Math.min(left, right);
        cache.set(`${i}-${j}`, ans)
        return ans;
    }
};
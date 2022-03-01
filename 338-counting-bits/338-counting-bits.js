/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n + 1);
    ans[0] = 0;
    let offset = 1
    
    for(let i=1; i<=n; i++ ) {
        if(offset*2 === i )
            offset = i
        
        ans[i] = 1 + ans[i - offset]
        
    }
    
    return ans
    
};
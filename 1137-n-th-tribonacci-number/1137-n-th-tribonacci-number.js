/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if( n == 0 || n == 1 || n == 2 )
        return n == 0 ? 0 : 1;
    
    let t0 = 0, t1 = 1, t2 = 1;
    
    for( let i=3; i<=n; i++ ) {
        let ans = t0+t1+t2;
        t0 = t1;
        t1 = t2;
        t2 = ans;        
    }
    
    return t2
};
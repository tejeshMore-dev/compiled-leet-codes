/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
    let sum = 0, ans = n;
    let k = Math.floor(Math.log10(n)+1);
    
    while( n ) {
        let r = n%10;
        sum += r ** k;
        console.log(r, k, r ** k)
        n = Math.floor(n/10);        
    }
    return sum === ans
};
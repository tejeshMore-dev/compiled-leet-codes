/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
    let sum = 0, num = n;
    let k = Math.floor(Math.log10(n)+1);
    
    while( num ) {
        let r = num%10;
        sum += ( r ** k );
        num = Math.floor(num/10)
    }
    
    return sum === n
};
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let cache = {};

var myPow = function(x, n) {
    if(n === 0)
        return 1
    
    let power = n;
    if(power < 0)
        power = power * (-1);
    
    let result = findPow(x, power);
    
    if(n < 0)
        return 1/result
    
    return result
};

function findPow(x,n) {
    if(cache[`${x}${n}`])
        return cache[`${x}${n}`]
    
    let result;
    if(n === 1)
        return x
    
    if(n === 0)
        return 1
    
    if(n % 2 === 0) {
        result = findPow(x, n/2);
        result *= result
    } else {
        result = findPow(x, (n -1)/2)
        result = result * result * x
    }
    
    cache[`${x}${n}`] = result;
    return result; 
}
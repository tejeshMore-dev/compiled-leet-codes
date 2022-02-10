/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let ans = 0;
    
    while( num ) {
        ans += num%10;
        num = Math.floor( num/10 );
        
        if( ans > 9 && num === 0 ) {
            num = ans;
            ans= 0;
        }
    }
    
    return ans;
};
/*


248
2 4 8
1 4
5


14 >> 5
38 >> 11 2





*/
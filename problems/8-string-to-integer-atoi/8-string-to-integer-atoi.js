/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, ans = 0, sign = 1;
    let signs = ["+", "-"];
    const MAX = 2 ** 31;
    
    while( s[i] === " " )
        i++
    
    if( signs.includes(s[i]) ) {
        sign = 1 - 2 * ( s[i++] === "-" )
    }
    
    while( i < s.length ) {
        if( s[i] < '0' || s[i] > '9') break 
        
        let digit = s.charAt(i++) - '0';
        ans = ans * 10 + digit;
        
        if( ans >= MAX ) {
            if( sign === 1 )
                return (MAX-1)
            else
                return sign * MAX
        }
    }
    
    return sign * ans;
};



/*
























































*/
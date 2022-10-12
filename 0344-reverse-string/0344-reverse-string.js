/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let lp = 0, rp = s.length-1;
    
    while( lp < rp ) {
        let temp = s[rp];
        s[rp] = s[lp];
        s[lp] = temp;
        
        lp++;
        rp--;
    }
    
    return s;
};
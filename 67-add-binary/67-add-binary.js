/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let c = 0, p1 = a.length-1, p2 = b.length-1, ans = [];
    
    while( c || p1 >= 0 || p2 >= 0 ) {
        let sum = ( p1 < 0 ? 0 : getNum(a.charAt(p1)) ) +
                  ( p2 < 0 ? 0 : getNum(b.charAt(p2)) ) + 
                  c
        ans.push( sum%2 );
        c = Math.floor( sum/2 );
        p1--;
        p2--;
    }

    return ans.reverse().join("");
    
    function getNum(s) {
        return s-'0';
    }
};
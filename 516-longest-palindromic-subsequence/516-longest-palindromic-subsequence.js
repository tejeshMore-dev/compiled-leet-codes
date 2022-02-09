/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let len = s.length-1;
    let cache= {};
    let rs = s.split("");
    
    let lp = 0, rp = rs.length-1;
     while( lp < rp ) {
         let temp = rs[lp];
         rs[lp++] = rs[rp];
         rs[rp--] = temp;
     }
    rs = rs.join("");
    return helper( s.length-1, rs.length-1, new Map() );
    
    function helper( m, n, map ) {
       if( map.has(`${m}-${n}`) )
            return map.get(`${m}-${n}`);
        
        if( m < 0 || n < 0 )
            return 0
        
        let res;
        if( s.charAt(m) === rs.charAt(n) ) {
            res = 1 + helper( m-1, n-1, map )
        } else {
            res = Math.max( helper(m-1, n, map), helper(m, n-1, map) )
        }
        
        map.set(`${m}-${n}`, res);
        return res
    }
};
/*


5  bbbab
5  babbb

len-1-i
4 3

0 1
b b b b 



cbbd
dbbc
bb 


























*/
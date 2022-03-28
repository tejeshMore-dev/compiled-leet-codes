/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    let temp = [];
    findString(0);
    return res;
    
    function findString(i) {
        if( i === s.length ) {
            return res.push( [...temp] );
        }
        
        for( let j=i; j < s.length; j++ ) {
            if( isPalindrome(s, i, j) ) {
                temp.push( s.substring(i, j+1) );
                findString(j+1)
                temp.pop();
            }
        }
    }
    
    function isPalindrome( s, l, r ) {
        while( l < r ) {
            if( s[l] !== s[r] )
                return false;
            
            l++;
            r--;
        }
        
        return true;
    }
};
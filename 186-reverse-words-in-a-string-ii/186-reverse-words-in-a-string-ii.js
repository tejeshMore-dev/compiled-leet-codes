/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    let rp = s.length-1;
    helper();
    reverseWord(0, s.length-1);
    return s;
    
    function helper() {
        if( rp < 0 )
            return;
        
        let end = rp;
        while( s[rp] !== " " && rp >= 0 )
            rp--;
        reverseWord(rp+1, end)
        rp--;
        helper();
    }
    
    function reverseWord(i,j) {
        while( i < j ) {
            let temp = s[i];
            s[i++] = s[j];
            s[j--] = temp
        }
    }
};
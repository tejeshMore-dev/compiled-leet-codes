/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = trim(s);
    let words = s.split(' ').filter((str) => str !== "")
    
    let lp = 0, rp = words.length-1;
    while( lp < rp ) {
        let temp = trim(words[rp]);
        words[rp] = trim(words[lp]);
        words[lp] = temp;
        lp++;
        rp--;
    }
    
    return words.join(" ");
    
    function trim(str) {
        if(s.length <= 0)
            return str
        let lp = 0, rp = str.length-1;
        
        while( str[lp] === " " || str[rp] === " " ) {
            if( str[lp] === " " )
                lp++
            if(str[rp] === " ")
                rp--
        }
        return str.substring(lp, rp+1);
    }
};
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let lp1 = 0, lp2= 0, len1 = word.length, len2 = abbr.length, result = true;
    
    while( lp2 < len2 && lp1 < len1 ) {
        if( word.charAt(lp1) === abbr.charAt(lp2) ) {
            lp1++;
            lp2++;
            continue
        }
        
        if( isNaN(abbr.charAt(lp2)) || abbr.charAt(lp2) === "0"  )
            return result = false
        
        let i = lp2;
        let num = 0;
        
        while( i < len2 && !isNaN(abbr.charAt(i)) ) {
            num = num * 10 + parseInt(abbr.charAt(i));
            i++;
        }
        lp2 = i;
        lp1 += num;
    }
	return result && ( lp1 === len1 && lp2 === len2 )
};

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let wP = 0, abbrP= 0, wL = word.length, abbrL = abbr.length;
    let result = true;
    
    while( wP < wL && abbrP < abbrL ) {
        //if same continue
        if( word.charAt(wP) === abbr.charAt(abbrP) ) {
            wP++;
            abbrP++;
            continue
        }
        // if not digit or leading 0, return false
        if( isNaN(abbr.charAt(abbrP)) || abbr.charAt(abbrP) === "0"  )
            return result = false
        
        // calculate num, as it can be > 9
        let i = abbrP;
        let num = 0;
        
        while( i < abbrL && !isNaN(abbr.charAt(i)) ) {
            num = num * 10 + parseInt(abbr.charAt(i));
            i++;
        }
        // skip the index till >> i + num
        abbrP = i;
        wP += num;
    }
	return result && ( wP === wL && abbrP === abbrL )
};

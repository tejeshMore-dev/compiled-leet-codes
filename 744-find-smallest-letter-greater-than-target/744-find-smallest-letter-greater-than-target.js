/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let lp = 0;
    let rp = letters.length-1;
    
    if( letters[lp] > target )
        return letters[0];
    
    while( lp < rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        if( letters[mid] > target ){
            rp = mid;
        } else {
            lp = mid + 1
        }
    }
    
    return letters[lp] > target ? letters[lp] : letters[0]

};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let map = {}, ans = 0, lp = 0, rp = 0;

    while( lp < s.length && rp < s.length ) {
        let char = s.charAt(rp);
        if( !map.hasOwnProperty(char)) {
            map[char] = rp;
            ans =  rp - lp + 1 > ans ? rp - lp + 1 : ans;
        } else {
            let lastIndex = map[char];
            while( lp <= lastIndex ) {
                delete map[s[lp]];
                lp++;
            }
            map[char] = rp; 
        }
        rp++;
    }

    return ans
};

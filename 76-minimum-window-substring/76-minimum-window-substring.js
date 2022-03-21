/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if( t === "" || t.length > s.length )
        return ""
    
    let tMap = {};
    for( let char of t ) {
        if( !tMap[char] )
            tMap[char] = 0;
        tMap[char] += 1;
    }
    
    let tChar = Object.keys(tMap).length;
    let cChar = 0;
    let cMap = {};
    let lp=0, length = s.length, rp = 0;
    let ans = [0, 0], ansLen = Number.MAX_VALUE;
    
    while( rp < length ) {
        let char = s[rp];
        if(!cMap[char])
            cMap[char] = 0;
        cMap[char] += 1;

        if( cMap[char] === tMap[char] )
            cChar++;

        while( cChar === tChar ) {
            if( rp - lp < ansLen ) {
                ans = [ lp, rp ];
                ansLen = rp-lp                        
            }
            cMap[s[lp]] -=1;

            if( cMap[s[lp]] < tMap[s[lp]] )
                cChar--;
            lp++;
        }
        rp++;
    }
    return ansLen === Number.MAX_VALUE ? "" : s.substring( ans[0], ans[1]+1 );
};
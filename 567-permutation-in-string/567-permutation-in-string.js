/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if( s2.length < s1.length )
        return false;
    
    let map = {}
    let lp=0, rp=0;
    
    for( let char of s1 ) {
        if(!map.hasOwnProperty(char))
            map[char] = 0;
        
        map[char] = map[char]+1;
    }
    
    for( let i=0; i <= s2.length-s1.length; i++ ) {
        if( map.hasOwnProperty(s2[i]) ){
             if( checkIfPermutation(s2, map, i, i+s1.length-1) )
                 return true
        }
    }
    
    return false;
};

const checkIfPermutation = function (s2, map, start, end) {
    let s1Map = { ...map };
    for( let i=start; i<=end; i++ ) {
        if( !s1Map.hasOwnProperty(s2[i]) || s1Map[s2[i]] === 0 )
            return false;
        
        s1Map[s2[i]] = s1Map[s2[i]] - 1;
    }
    
    return true
}

/*
s2l < s1l false;
ab 2
abc 3

 s1 = "ab", s2 = "eidboaoo"

a:1
b:2

a:1
b:1

      l
      r
eidboaoo

char !map
    if( r-l > 0 )       
    reset  r=l

    l++
    r++
    

char in map 
    r++
    dec in map2


r-l+1 === s1.length >> true
*/
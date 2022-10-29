/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if( pattern.length < 2 )
        return true;
    
    let map = {};
    let set = new Set();
    let si=0;
    
    for( let char of pattern ) {
        let word = findWord(s);
        
        if( !map[char] ) {
            if( set.has(word) )
                return false
            
            map[char] = word;
            set.add(word)
        } else {
            if( map[char] !== word )
                return false

        }
    }
    console.log(si, s.length)
    return si === s.length+1;
    
    function findWord(s) {
        let sb = [];
        
        while(si < s.length && s[si]!== " "){
            sb.push(s[si]);
            si++;
        }
        
        si++;
        return sb.join("");
    }
};
/*

a: dog
b: cat


iterate over pattern
find word

if( !map)
add in map

else
matching ? continue : false


return true
*/
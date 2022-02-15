/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let map = {}, result = [];
    
    for( let string of strings ) {
        let pattern = getPattern(string);
        console.log(string, pattern);
        if( !map[pattern] )
            map[pattern] = [];
        
        map[pattern].push(string);
    }
    
    for( let key in map ) {
        result.push( map[key] )
    }
    return result;
    
    function getPattern(str) {
        if( str.length === 1 )
            return 'a'
        
        let res = [];
        for( let i = 1; i < str.length; i++ ) {
            
            let diff = str.charCodeAt(i) - str.charCodeAt(i-1);
            if( diff < 0 )
                diff += 26;
            
            res.push( diff+ 'a' )
        }
        return res.join("");
    }
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let result = [];
    
    for( let str of strs ) {
        if( !map[getSortedString(str)] )
            map[getSortedString(str)] = []
        
        map[getSortedString(str)].push(str);
    }
    
    
    for( let key in map ) {
        result.push(map[key])
    }
    
    return result;
};

const getSortedString = function(str) {
    return str.split("").sort((a,b) => a.localeCompare(b) ).join("");
}

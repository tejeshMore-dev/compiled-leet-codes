/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    
    for( let str of strs ) {
        let hash = getHash(str);
        if( !map.has(hash) )
            map.set(hash, [])
        
        let arr =  map.get(hash);
        arr.push(str)
        map.set(hash, arr);
        
    }
    
    return [ ...map.values()];
};

const getHash = function(str) {
    let sb = new Array(26).fill(0);
    
    for( let char of str ) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        sb[index] = sb[index] + 1;
        
    }
    return sb.join("#");
}
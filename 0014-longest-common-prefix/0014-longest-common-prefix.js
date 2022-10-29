/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    
    for( let i=1; i<strs.length; i++ ) {
        let str = strs[i];
        let sb = [];
        
        for( let j=0; j<prefix.length; j++ ) {
            if( prefix[j] === str[j] )
                sb.push(str[j]);
            else
                break
        }
        
        if( !sb.length )
            return "";
        
        prefix = sb.join("");
    }
    
    return prefix;
};
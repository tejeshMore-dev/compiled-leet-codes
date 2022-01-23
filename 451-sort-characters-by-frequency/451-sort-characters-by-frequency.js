/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {}, bucketList = new Array(s.length+1), ans = new Array(s.length);
    
    for( let char of s ) {
        if( !map[char] )
            map[char] = 0;
        
        map[char] = map[char] + 1;
    }
    for( let key in map ) {
        let frequency = map[key];
        
        if( !bucketList[frequency] )
            bucketList[frequency] = new Array();
        
        bucketList[frequency].push(key)
    }
    
    let pointer = 0;
    for( let i = bucketList.length-1; i > 0; i-- ) {
        if( Array.isArray(bucketList[i])) {
            let chars = bucketList[i];
            
            for( let j = 0; j<chars.length; j++ ) {
                for ( let k = 0; k<i; k++) {
                    ans[pointer++] = chars[j]
                }
            }
        }
            
    }
    
    return ans.join("");
};
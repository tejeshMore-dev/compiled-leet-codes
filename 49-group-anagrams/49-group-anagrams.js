/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sb = new Array(26);
    let map = {};
    
    for( let str of strs ) {
        // reset array count
        for( let i=0; i < 26; i++ ) {
            sb[i] = 0;
        }
        
        // fill count detail
        for( let i=0; i < str.length; i++ ) {
            sb[str.charCodeAt(i) - 97] += 1;
        }
        
        let key = sb.join("#");
        console.log(key, sb)
        if( map[key] ){
            map[key].push(str);
        } else {
            map[key] = [ str ];
        }
    }
    
    return Object.values(map);
};

/*


eat
tea













*/
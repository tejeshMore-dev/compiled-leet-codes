/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }, result = 0, lastVal = 1001;
    
    
//     for(let i=0; i < s.length ; i++ ) {
//         let char = s[i], val = map[char];
        
//         if( val <= lastVal ) {
//             result += val;
//             lastVal = val;
//         } else {
//             result = result + val + (-2 * lastVal);
//             lastVal = val;
//         }
//     }
        
    for(let i=0; i < s.length ; i++ ) {
        
        if( map[s[i]] <  map[s[i+1]] ) {
            result -= map[s[i]];
        } else {
            result += map[s[i]];
        }
    }
    return result;
};
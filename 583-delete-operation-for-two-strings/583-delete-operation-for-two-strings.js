/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// var minDistance = function(word1, word2) {
//     let i1L = word1.length, i2L = word2.length;
//     return helper( 0, 0, new Map() );
    
//     function helper(i1, i2, map) {            
//         if( i2 === i2L ) 
//             return i1L - i1
    
//         if( i1 === i1L ) 
//             return i2L - i2
        
//         if( map.has(`$[i1}-${i2}`) )
//             return map.get(`$[i1}-${i2}`)
        
//         let res;
//         if ( word1.charAt(i1) === word2.charAt(i2) )
//             res = helper( i1+1, i2+1, map )
//         else
//             res = Math.min( helper(i1+1, i2, map), helper(i1, i2+1, map) ) + 1
        
//         map.set( `$[i1}-${i2}`, res );
//         return res;
//     }
// };

var minDistance = function(word1, word2) {
    var json = {};
   return recursion(word1, word2, 0, 0,json);
};
function recursion(w1, w2, i1, i2, json) {
    if (w2.length === i2) {
        
        return w1.length - i1;
    }
    if (w1.length === i1) {
        return w2.length - i2;
    }
    if (json[`${i1}-${i2}`] !== undefined) return json[`${i1}-${i2}`];
    if (w1[i1] === w2[i2]) {
        json[`${i1}-${i2}`] = recursion(w1,w2,i1+1,i2+1, json);
        return json[`${i1}-${i2}`] 
    } else {
        const min = Math.min(recursion(w1,w2,i1+1, i2, json), recursion(w1,w2,i1,i2+1, json))
		// a letter is deleted form either of the string 
        json[`${i1}-${i2}`] = min + 1;
        return json[`${i1}-${i2}`];
    }
}


/*

sea
eat




0 0 0

solution ( delC, i1, i2 ) 

// base case here
    if( i1 === i1L && i2 === i2L ) 
        return 0
    
    if( i1 === i1L ) 
        return i2L - i2+ 1
    
    if( i2 === 21L ) 
        return i1L - i1 + 1
    
if mtching
    solution( delC, i1+1, i2+1 )
else
    Math.min( Solution(delC+1, i1+1, i2), Solution(delC+1, i1, i2+1) )
























*/
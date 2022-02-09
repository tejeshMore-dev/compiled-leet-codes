/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    return helper( word1, word2, 0, 0, {} );
};

function helper(w1, w2, i1, i2, cache) {      
        if( w2.length === i2 ){
            return w1.length - i1;            
        }
    
        if( w1.length === i1 ) {
            return w2.length - i2;           
        }
    
          if( cache[`${i1}-${i2}`] !== undefined ) {
            return cache[`${i1}-${i2}`]
                          
          }
        
        if ( w1[i1] === w2[i2] ){
            return cache[`${i1}-${i2}`] = helper( w1, w2, i1+1, i2+1, cache );
        }
        else {
            return cache[`${i1}-${i2}`] = Math.min( helper(w1, w2, i1+1, i2, cache), 
                                                  helper(w1, w2, i1, i2+1, cache) ) + 1;
        }
}
// var minDistance = function(word1, word2) {
//     var json = {};
//    return recursion(word1, word2, 0, 0,json);
// };
// function recursion(w1, w2, i1, i2, json) {
//     if (w2.length === i2) {
        
//         return w1.length - i1;
//     }
//     if (w1.length === i1) {
//         return w2.length - i2;
//     }
//     if (json[`${i1}-${i2}`] !== undefined) return json[`${i1}-${i2}`];
//     if (w1[i1] === w2[i2]) {
//         json[`${i1}-${i2}`] = recursion(w1,w2,i1+1,i2+1, json);
//         return json[`${i1}-${i2}`] 
//     } else {
//         const min = Math.min(recursion(w1,w2,i1+1, i2, json), recursion(w1,w2,i1,i2+1, json))
// 		// a letter is deleted form either of the string 
//         json[`${i1}-${i2}`] = min + 1;
//         return json[`${i1}-${i2}`];
//     }
// }


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
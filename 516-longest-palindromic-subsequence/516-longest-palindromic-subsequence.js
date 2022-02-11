/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let cache = {};
    return helper( s, 0, s.length-1, cache );
};

function helper( s, l, r, cache ) {
   if( cache[`${l}-${r}`] )
        return cache[`${l}-${r}`];

    if( l === r )
        return 1
    
    if( l > r )
        return 0
    

    if( s.charAt(l) === s.charAt(r) ) {
        // let ans;
        // if( cache[`${l+1}-${r-1}`] )
        //     ans = 1 +  cache[`${l+1}-${r-1}`]
        // else 
        //     ans = 1 + helper( s, l+1, r-1, cache )
        
        return cache[`${l}-${r}`] = 2 + helper( s, l+1, r-1, cache );
    } else {
//         let left, right;
//         if( cache[`${l+1}-${r}`] ) {
//             left = cache[`${l+1}-${r}`]
//         } else {
//             left = helper(s, l+1, r, cache)
//         }
        
//         if( cache[`${l}-${r-1}`] ) {
//             right = cache[`${l}-${r-1}`]
//         } else {
//             right = helper(s, l, r-1, cache)
//         }
        
        cache[`${l}-${r}`] = Math.max( helper(s, l, r-1, cache), helper(s, l+1, r, cache), helper(s, l+1, r-1, cache) )
        return cache[`${l}-${r}`];
    }
}
/*


5  bbbab
5  babbb

len-1-i
4 3

0 1
b b b b 



cbbd
dbbc
bb 


























*/
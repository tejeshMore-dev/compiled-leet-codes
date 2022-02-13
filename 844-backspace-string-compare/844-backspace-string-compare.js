/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const backspaceCompare = (S, T) => {
    
//     function strip(str) {
//         let stack = [];
        
//         for(let char of str){
//             if(char === "#") {
//                 if(stack.length > 0) stack.pop()
//             } 
//             else stack.push(char);
//         }
//         return stack.join('');
//     }
    
//     return strip(S) === strip(T);
// };

const backspaceCompare = (S, T) => {
    let p1 = S.length-1, p2 = T.length-1, result = true;
    
    while( p1 >= 0 || p2 >= 0 ) {
        p1 = getCharI(S,p1);
        p2 = getCharI(T,p2);
        console.log(S[p1], T[p2])
        if( p1 >= 0 && p2 >= 0 && S[p1] !== T[p2] )
            return result = false;
        
        if( p1 >= 0 != p2 >= 0 )
            return result = false;
        
        p1--;
        p2--;
    }
    return result;
    
    
    function getCharI(str, p) {
        if( str[p] !== "#" )
            return p
        
        let swap = 0;
        while( 1 ) {
            if( str[p] === "#" ) {
                swap++;
                p--;
            } else if( swap > 0 ) {
                swap--;
                p--
            } else {
                break
            }
        }
        
        return p
    }
}
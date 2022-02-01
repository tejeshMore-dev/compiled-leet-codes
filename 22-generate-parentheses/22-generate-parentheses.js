/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
    helper(0, 0, '');
    return ans;
    
    function helper( oB, cB, r ) {
        if( r.length === n*2 )
            ans.push(r)
        
        // push ith oB
        if( oB < n  )
            helper(oB+1, cB, r + "(" )

        // if oB > cB push with dB
        if( oB > cB && cB < n )
            helper(oB, cB+1, r + ")" )
        
    }
};


/*
var generateParenthesis = function(n) {
    let result = [];
    
    function backtrack( openingCount, closingCount, currentString ) {
        if( currentString.length === n*2 )
            result.push(currentString);
        
        if( openingCount < n ) backtrack( openingCount+1, closingCount, currentString + "(" );           
        if( closingCount < n && closingCount < openingCount ) backtrack( openingCount, closingCount+1, currentString + ")" );
    }
    
    backtrack(0,0,"");
    return result;
};


helper(oB, cB,index,new Array(n*1) ) {
    if( oB && cB === 3 )
        push in ans
        
    push ith oB
    
    if oB > cB push with dB
}






(

((
()


(((
(()


()(






















































*/
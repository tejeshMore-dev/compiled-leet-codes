/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let openB = "(";
    let closeB = ")";
    let res = []
    findCombination(0, 0, [], res)
    return res;    
    
    function findCombination(oC, cC, current, res) { //n
        if( current.length === n*2 )
            return res.push(current.join(""));
        
        if( oC < n )
            findCombination(oC+1, cC, [ ...current, openB ], res);
        
        if( cC < n && oC > cC)
            findCombination(oC, cC+1, [ ...current, closeB ], res);
    }
};

/*
3

())(()

((
()

(((
(()
()(


((()
(()(
(())
()((
()()

((())
(()()
(())(
()(()
()()(


((()))
(()())
(())()
()(())
()()()
*/
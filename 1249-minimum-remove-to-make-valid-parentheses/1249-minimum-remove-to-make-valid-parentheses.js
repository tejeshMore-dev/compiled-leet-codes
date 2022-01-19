/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
	let stack = [], invalidIndex = [];
	let bracket = [ '(', ')' ];

	for(let i=0; i<s.length; i++) {
        if( !bracket.includes(s.charAt(i))  ) continue;
        
        if( s.charAt(i) === bracket[0] ) {
            stack.push(i);
        } else {
            if(stack.length === 0)
                invalidIndex.push(i)
            else
                stack.pop()
        }
    }
    
        while(stack.length > 0)
            invalidIndex.push(stack.pop());
    
        let result = [];
        for( let i = 0; i < s.length; i++ ) {
            if(!invalidIndex.includes(i))
                result.push(s[i])
    }

        return result.join('');
};
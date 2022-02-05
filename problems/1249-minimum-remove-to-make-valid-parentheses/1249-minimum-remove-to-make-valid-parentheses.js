/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
	let stack = [], bracket = {
        opening : '(',
        closing : ')'
    };
    s = s.split('');

	for(let i = 0; i < s.length; i++) {
        
        if( s[i] === bracket.opening ) {
            stack.push(i);
        } 
        if( s[i] === bracket.closing ) {
            if(stack.length === 0)
                s[i] = '';
            else
                stack.pop()
        }
    }
    
    while(stack.length > 0)
        s[stack.pop()] = '';

    return s.join('');
};
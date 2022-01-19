/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [], i = 0;

	while (i < num.length) {
        while(k>0 && stack.length > 0 && stack[stack.length-1] > num[i]) {
            stack.pop();
            k--;
        }

        stack.push(num[i]);
        i++;
    }
    while(k--) {
        stack.pop();
    }

    while( stack[0] === '0' && stack.length > 1 ) {
        stack.shift();
    }
    
    return stack.length > 0 ? stack.join('') : '0';
};
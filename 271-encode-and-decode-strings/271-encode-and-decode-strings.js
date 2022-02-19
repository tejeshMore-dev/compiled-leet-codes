/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */


var encode = function(strs) {
    let res = [];
    for( let i=0; i < strs.length; i++ ) {
        res.push(strs[i].length, "$", strs[i])
    }
    
    return res.join("")
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let res = [];
    
    for( let i=0; i<s.length; i++) {
        let length = 0, j = i;
        while(s.charAt(j) !== "$") {
            length = length * 10 + parseInt(s.charAt(j));
            j++;
        }
        let str = s.substring( j+1 , j + length + 1 );
        res.push(str);
        i = j + length;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
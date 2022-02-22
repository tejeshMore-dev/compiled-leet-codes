/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let num = 0;
    
    for( let i in columnTitle ) {
        num = num * 26 + getNumber(columnTitle.charAt(i));
    }
    return num
    
  
    function getNumber(char) {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
};
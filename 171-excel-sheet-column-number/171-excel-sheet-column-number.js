/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let num = 0;
    
    for( let i in columnTitle ) {
        num = num * 26 + _getNumber(columnTitle.charAt(i));
    }
    return num
    
  
    function _getNumber(char) {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
};
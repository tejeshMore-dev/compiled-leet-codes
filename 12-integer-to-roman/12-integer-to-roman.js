/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romans = [ "M", "CM", "D",  "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
    const romanValues = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let ans = [], i = 0;
    
    while( num ) {
        while( num >= romanValues[i] ) {
            num -= romanValues[i];
            ans.push(romans[i]);
        }
        console.log(ans, romans[i])
        i++;
    }
    
    return ans.join("");
};
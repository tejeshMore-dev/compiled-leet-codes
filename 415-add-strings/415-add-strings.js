/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let c = 0, ans = [], l1 = num1.length-1, l2 = num2.length-1;
    
    while( c || l1 >= 0 || l2 >= 0 ) {
        let sum = (l1 < 0 ? 0 : getNum(num1[l1])) +
                  (l2 < 0 ? 0 : getNum(num2[l2])) + 
                  c;
        ans.push( sum%10 );
        c = Math.floor(sum/10);
        l1--;
        l2--
    }
    ans.reverse();
    return ans.join("");
    
    
    function getNum(num) {
        return num - '0'
    }
};
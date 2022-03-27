/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let set = new Set(nums);
    return backtrack( 0, new Array(nums.length).fill("0") );
    
    function backtrack( i, current ) {
        if( i === nums.length ) {
            return !set.has(current.join("")) ? current.join("") : null;
        }
        
        let res = backtrack( i+1, current );
        if (res) return res;
        
        current[i] = "1";
        res = backtrack( i+1, current );
        if (res) return res;
    }
};
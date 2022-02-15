/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result;
    
    for( let num of nums ) {
      result ^= num;   
    }
    
    // let map = new Map();
    // for ( let num of nums ) {
    //     if( map.has(num))
    //         map.set(num, 2)
    //     else 
    //         map.set(num, 1)
    // }
    // map.forEach(( value, key, map ) => {
    //    if( value === 1 )
    //        return result = key
    // });
    
    return result; 
};

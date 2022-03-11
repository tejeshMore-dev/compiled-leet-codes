/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if( nums.length <= 1 ) {
        return nums;
    }
    
    let mid = Math.floor( nums.length/2 );
    let leftArr =  sortArray(nums.slice(0, mid));
    let rightArr =  sortArray(nums.slice(mid, nums.length));
    
    return merge( leftArr, rightArr );
};

function merge( leftArr, rightArr ) {
    let result = new Array( leftArr.length + rightArr.length );
    let lp = 0, rp = 0, p = 0;
    
    while( lp < leftArr.length && rp < rightArr.length ) {
        if( leftArr[lp] < rightArr[rp] ) {
            result[p++] = leftArr[lp];
            lp++;
        } else {
            result[p++] = rightArr[rp];
            rp++;
        }        
    }
    
    while( lp < leftArr.length ) {
        result[p++] = leftArr[lp++];
    }
    
    while( rp < rightArr.length ) {
        result[p++] = rightArr[rp++];
    }
    
    return result;
}
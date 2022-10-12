/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let length = nums.length;
    k = k%length;
    
    if( k == 0 )
        return nums;

    let p1Length = length - k;
    
    reverse(nums, 0, p1Length-1);
    reverse(nums, p1Length, length-1);
    reverse(nums, 0, length-1);
    return nums;
};

const reverse = function(arr, s, e) {
    while( s < e ) {
        let temp = arr[e];
        arr[e] = arr[s];
        arr[s] = temp;
        s++;
        e--;
    }
}
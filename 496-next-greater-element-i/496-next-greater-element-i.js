/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [ nums2[0] ];
    let ans = [];
    let map = new Map();
    
    for( let i = 1; i < nums2.length; i++ ) {
        while( nums2[i] > stack[stack.length-1] ) {
            map.set( stack.pop(), nums2[i] );
        }
        
        stack.push(nums2[i]);
    }
    
    while( stack.length ) {
            map.set( stack.pop(), -1 );
    }
    // console.log(map);
    for(  let num of nums1) {
        ans.push(map.get(num))
    }
    
    return ans;
};
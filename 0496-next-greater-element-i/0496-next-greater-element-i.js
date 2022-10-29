/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let stack = [];
    let res = [];
    
    for( let i=nums2.length-1; i>=0; i-- ) {
        let num = nums2[i];
        
        if( !stack.length ) {
            map[num] = -1;
        } else if( stackTop() > num ) {
            map[num] = stackTop();
        } else {
            while( stack.length && stackTop() < num ){
                stack.pop();   
            }
            
            if( !stack.length )
                map[num] = -1;
            else
                map[num] = stackTop();
        }
        
        stack.push(num);
    }
    
    function stackTop() {
        return stack[stack.length-1];
    }
    
    for( let num of nums1 ) {
        res.push(map[num]);
    }
    return res;
};
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    arr = w;
    for( let i=1; i<arr.length; i++ ) {
        arr[i] = arr[i] + arr[i-1];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let number = Math.floor(Math.random() * arr[arr.length-1] + 1);
    let lp = 0, hp = arr.length-1;
    
    while( lp < hp ) {
        let mid = Math.floor( lp + (hp-lp)/2 );
        
        if( arr[mid] === number )
            return lp = mid
        
        if( number > arr[mid] ) {
            lp = mid+1;
        } else {
            hp = mid
        }
    }
    
    return lp;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let lp = 1, rp = Math.max( ...piles );
    let res = Number.MAX_VALUE;
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        let hrReq = findHrs(mid);
        
        if( hrReq > h ) {
            lp = mid+1;
        } else {
            res = Math.min(res, mid);
            rp = mid-1;
        }
    }
    
    return res;
    
    function findHrs(val) {
        let ans = 0;
        
        for( let pile of piles ) {
            ans += Math.ceil(pile/val);
        }
        
        return ans;
    }
};
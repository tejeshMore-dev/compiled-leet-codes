/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
    let lp = 0, rp = removable.length-1;
    let ans = 0;;
    let removedSet = new Set();
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        
        removedSet.clear();
        for( let i=0; i <= mid; i++ ) {
            removedSet.add(removable[i]);
        }
        
        if( isSubString( s, p ) ) {
            ans = Math.max( ans, mid+1 );
            lp = mid+1;
        } else {
            rp = mid-1;
        }
    }
    
    return ans;
    
    function isSubString( s, p ) {
        let p1 = 0, p2 = 0;
        
        while( p1 < s.length && p2 < p.length ) {
            if( removedSet.has(p1) || s[p1] !== p[p2] ) {
                p1++;
                continue;
            }
            
            p1++;
            p2++;
        }
        
        return p2 == p.length;
    }
};
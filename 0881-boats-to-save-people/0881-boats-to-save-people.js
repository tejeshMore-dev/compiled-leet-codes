/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let ans = 0;
    people.sort((a, b) => a-b);
    
    let lp = 0, rp = people.length-1;
    
    while( lp <= rp ) {
        if( people[lp] + people[rp] <= limit )
            lp++;
        
        rp--;
        ans++;
    }
    
    return ans;
};
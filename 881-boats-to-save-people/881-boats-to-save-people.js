/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b );
    let ans = 0;
    let lp = 0, rp = people.length-1;
    
    while( lp <= rp  ) {
        if( people[rp] + people[lp] <= limit  ) {
            lp++;
            rp--;
        } else {
            rp--;            
        }
        ans += 1;
    }
    
    return ans;
};
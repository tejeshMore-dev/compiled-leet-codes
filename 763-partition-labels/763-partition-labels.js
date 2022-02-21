/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	let map = {}, res = [];

    // create map for first ans last occurance
	for( let i = 0; i < s.length; i++ )  {
		let char = s.charAt(i);
		
        if( !map[char] ) {
            map[char] = { f: i, l:i  }	
        } else {
            map[char].l = i;
        }
    }
	
	let lp = 0 , c = 0, max = -1;
	
    // compare max window
    while( c < s.length ) {
        let char = s.charAt(c);
        let { l , f } = map[char];
        
        if( l > max )
            max = l 
        
		if( c == max ) {
            res.push(max-lp+1);
            lp = c+1;
            max = -1;
        }
        c++
    }
    
    return res
}

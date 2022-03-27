
var TimeMap = function() {
    this.data = { };
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if( !this.data[key] )
        this.data[key] = [];
    
    this.data[key].push([ value, timestamp ]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if( !this.data[key] )
        return "";
    
    let list = this.data[key];
    let lp = 0, rp = list.length-1;
    let res = "";
    
    while( lp <= rp ) {
        let mid = Math.floor( lp + (rp-lp)/2 );
        let midVal = list[mid];
        
        if( timestamp >= midVal[1] ) {
            lp = mid+1;
            res = midVal[0];
        } else {
            rp = mid-1;
        }
    }
    
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
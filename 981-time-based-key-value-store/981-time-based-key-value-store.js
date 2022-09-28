
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if( !this.map.hasOwnProperty(key))
        this.map[key] = { timeStamps:[] }
    
    this.map[key].timeStamps.push(timestamp);
    this.map[key][timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if( !this.map.hasOwnProperty(key) )
        return "";
    
    let lp = 0, rp = this.map[key]["timeStamps"].length-1;
    
    while( lp < rp ) {
        let mid = lp + Math.ceil((rp-lp)/2);
        
        if( timestamp < this.map[key]["timeStamps"][mid]  )
           rp = mid-1;
        else
           lp = mid;
        
    }
    return this.map[key]["timeStamps"][lp] <= timestamp ? this.map[key]
    [this.map[key]["timeStamps"][lp]] : ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

/*

foo  
    1: bar
    4: bar2
    timestamp [1,2,3,4,5 ]
     
bar 
bar
bar2
bar2



*/
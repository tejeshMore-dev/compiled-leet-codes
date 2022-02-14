
var TwoSum = function() {
    this.map = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.map[number] = this.map[number] ? this.map[number] + 1 : 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for( let num1 in this.map ) {
        let num2 = value - num1;
        
        if( (num1 == num2 && this.map[num2] > 1) || 
            (num1 != num2 && this.map[num2] ) )
           return true
    }
    
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
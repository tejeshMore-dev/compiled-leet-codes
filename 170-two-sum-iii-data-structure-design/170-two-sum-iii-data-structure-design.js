
var TwoSum = function() {
    this.list = [];
    this.map = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if( this.map.hasOwnProperty(number) ) {
        this.map[number] = this.map[number] + 1;
    } else {
        this.map[number] = 1;
        this.list.push(number);
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for( let i = 0; i < this.list.length; i++ ) {
        let num1 = this.list[i], num2 = value - num1;
        if( (num1 === num2 && this.map[num1] >= 2) || (num1 !== num2 && this.map.hasOwnProperty(num2) ) )
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
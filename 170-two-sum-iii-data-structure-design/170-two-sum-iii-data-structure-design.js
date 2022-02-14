var TwoSum = function() {
    this.map = new Map();
};

TwoSum.prototype.add = function(number) {
    this.map.set(number, (this.map.get(number) || 0) + 1);
};

TwoSum.prototype.find = function(value) {
    for (const key of this.map.keys()) {
        const val = parseInt(key);
        const toFind = value - val;
        if (this.map.has(toFind)) {
            if (val !== toFind) {
                return true;
            } else if (this.map.get(toFind) > 1) {
                return true;
            }
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
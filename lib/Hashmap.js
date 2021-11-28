class Hashmap {
    constructor() {
        this.Hashmap = {};
    }

    put(key, value) {
        this.Hashmap[key] = value;
    }
    
    remove(key) {
        if (this.includes(key))
            delete this.Hashmap[key]
    }

    includes(key) {
        return this.Hashmap.hasOwnProperty(key)
    }
}
module.exports = Hashmap;


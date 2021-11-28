//private properties
let pointer = 0;

class myArray {
    constructor(length) {
        this.length = length;
        this.array = new Array(length);
        this.increseRate = 2;   // increase rate: by default x2
    }

    insert(item) {
        if (pointer === this.array.length) {
            let newArray = new Array(pointer * this.increseRate);
            for (let index = 0; index < this.array.length; index++) {
                newArray[index] = this.array[index];
            }
            newArray[pointer] = item;
            this.length = pointer * this.increseRate;
            this.array = newArray;
            pointer++;
            return
        }

        this.array[pointer] = item;
        pointer++;
    }

    remove() {
        this.array[pointer] = null;
        pointer ? pointer-- : pointer
        return 1
    }


    removeAt(index) {
        if (index < 0 || index >= pointer || pointer === 0 )
            throw new Error("illegal argument");

        for (let i = index; i < pointer; i++) {
            this.array[i] = this.array[i+1];
        }
        pointer--;
    }

    indexOf(item) {
        for (let index = 0; index < this.array.length; index++) 
            if (this.array[index] === item)  
                return index 
                 
        return -1;
    }

    print() {
        for (let index = 0; index < pointer; index++) {
            process.stdout.write(`${this.array[index]} `);
        }
        process.stdout.write(`\n`);
        console.log({array: this.array, length: this.array.length });
    }
}

module.exports = myArray;
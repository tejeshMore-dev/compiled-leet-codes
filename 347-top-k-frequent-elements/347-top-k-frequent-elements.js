/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Node {
	constructor(val,frequency) {
        this.val = val;
        this.frequency  = frequency;
    }
}

class Heap {
	constructor() {
        this.data = [];
    }

    insert(val, fr) {
        this.data.push(new Node(val, fr));
        let index = this.data.length-1;

        while( index > 0 && this.data[index].frequency > this.data[parentIndex(index)].frequency ) {
        let temp = this.data[index];
        this.data[index] = this.data[parentIndex(index)];
        this.data[parentIndex(index)] = temp;
        index = parentIndex(index);
        }

        function parentIndex(index) {
            return Math.floor((index - 1)/ 2);
        }
    }

    remove() {
        let max = this.data[0];
        let current  = this.data.pop();
        this.data[0] = current;
        let length = this.data.length, index = 0;

        while( true ) {
            let leftChildIndex = index * 2 + 1, rightChildIndex = index * 2 + 2, swap = null;


            if( leftChildIndex < length && 
                this.data[leftChildIndex].frequency > current.frequency  ) {
                    swap = leftChildIndex;
            }

            if( rightChildIndex < length ){
                if( ( swap === null && 
                   this.data[rightChildIndex].frequency > current.frequency) ||
                 ( swap !== null &&
                   this.data[rightChildIndex].frequency > this.data[leftChildIndex].frequency ) ) {
                        swap = rightChildIndex;
                }
            }

            if( swap === null ) break

            this.data[index] = this.data[swap];
            this.data[swap] = current;
            index = swap;
        }
        return max
    }
}



var topKFrequent = function(nums, k) {
    let ans  = [], map = {};

    for( let num of nums ) {
        if(!map[num])
            map[num] = 1
        else
            map[num] = map[num] + 1;
    } 
    
    const heap = new Heap();
    for( let key in map ) {
        heap.insert(key,map[key]); 
    }
    
    console.log(heap)
    while( k-- ) {
        ans.push(heap.remove().val);
    }

    return ans
};







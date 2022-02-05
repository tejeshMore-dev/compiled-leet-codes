function merge(left, right) {
    let arr = [];

    while(left.length > 0 && right.length > 0) {
        if( left[0] < right[0] )
            arr.push( left.shift() );
        else
            arr.push( right.shift() )
    }
    return [ ...arr, ...left, ...right ]
}


class Sort{
    mergeSort(arr) {
        const half = arr.length/2;

        if( arr.length < 2 )
            return arr
        
        const left = arr.splice(0, half); 
        return merge( this.mergeSort(left), this.mergeSort(arr) );
    }

}

module.exports = Sort;

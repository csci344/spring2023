class SuperArray extends Array {
    
    forEachNew(callback) {
        /*
        Behind the scenes, forEach is probably just implementing a 
        for loop and invoking the callback function for each item
        in the array with the three arguments specified in the documentation:
            1. The current item
            2. The index
            3. The actual array
        */

    }
    
    mapNew(callback) {
        // TODO
    }

    filterNew(callback) {
        // TODO
    }

    reduceNew(callback) {
        // TODO
    }

}

const myArray = new SuperArray(1, 2, 3, 4, 5);

// test your forEach method:
console.log('forEach...');
myArray.forEach(item => {
    console.log(item);
});
myArray.forEachNew(item => {
    console.log(item);
});

// test your map method:
console.log('map...');
console.log(myArray.map(item => item ** 2));
console.log(myArray.mapNew(item => item ** 2));

// test your filter method:
console.log('filter...');
console.log(myArray.filter(item => item % 2 == 0));
console.log(myArray.filterNew(item => item % 2 == 0));

// test your reduce method:
console.log('reduce...');
console.log(myArray.reduce((a, b) => a + b));
console.log(myArray.reduceNew((a, b) => a + b));

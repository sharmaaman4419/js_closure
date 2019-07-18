// Challenge 1
function addTwo(num) {
    function add() {
    return num+2;
}
return add();
}
 console.log(addTwo(3));
 console.log(addTwo(10));

// Challenge 2
function addS(word) {
    function add() {
      return console.log(word+"s");
    }
    return add();
}
 console.log(addS('pizza'));
 console.log(addS('bagel'));

// Challenge 3
function map(array, addTwo) {
    let newarr = [];
    for (let i =0; i<array.length; i++) {
       newarr.push(addTwo(array[i]));
    }
    return newarr;
}
function addTwo(n) {
    return n*2;
}
 console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for ( let i = 0; i<array.length; i++) {
        callback(array[i]);
    }
}
function callback(n) {
    console.log(n)
}
console.log(forEach([1,2,3,4],callback));
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
let arr = [1,2,3];
function cb(n) {
    let acc = 0;
    return acc = acc+n;
}
function reduce(arr,cb) {
    for (let i =0; i<arr.length; i++) {
         return cb(arr[i]);
}
}
//Extension 2
function reduce(array, callback, initialValue) {}

//Extension 3
function intersection(arrays) {}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

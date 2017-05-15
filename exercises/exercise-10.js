

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function doStuff(a, b, operation1, operation2) {
    console.log(`operation1 result is ${operation1(a, b)}`);
    console.log(`operation2 result is ${operation2(a, b)}`);
}

var a = 5;
var b = 3;
// Call the 'doStuff' method and pass in the values a & b defined above along
// with the 'add' and 'sub' methods.
// Should display:
// operation1 result is 8
// operation2 result is 2

var x = 6;
var y = 3;
// Call the 'doStuff' method and pass in the values x & y defined above along
// with the 'add' and 'sub' methods.
// Should display:
// operation1 result is 9
// operation2 result is 3

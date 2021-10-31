"use strict";
let idExample = 5;
let idExample2 = 5; //typescript
// idExample = '5'
// idExample2 = '2'
//tsc index.ts will compile to js
//tsc --watch index will continuously watch for errors
//tsc --init config file
//basic types
let id = 5;
let company = 'Shining Star';
let isTrue = true;
let x = 'Hello';
x = true; //any will not complain if type changes
let ids = [1, 2, 3, 4, 5];
// ids.push('hello') will error
let arr = [1, true, 'hello'];
//tuple
let person = [1, 'Brad', true]; //order matters
//tuple Array
let employee;
employee = [
    [1, 'brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid;
pid = '22'; //can be number or string
//Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right);
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;

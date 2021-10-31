let idExample = 5
let idExample2: number = 5 //typescript

// idExample = '5'
// idExample2 = '2'

//tsc index.ts will compile to js
//tsc --watch index will continuously watch for errors
//tsc --init config file

//basic types
let id: number = 5
let company: string = 'Shining Star'
let isTrue: boolean = true
let x: any = 'Hello'

x = true //any will not complain if type changes

let ids: number[] = [1,2,3,4,5]

// ids.push('hello') will error
let arr: any[] = [1, true, 'hello']

//tuple
let person: [number, string, boolean] = [1, 'Brad', true] //order matters

//tuple Array
let employee: [number, string][]

employee = [
  [1, 'brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number

pid = '22' //can be number or string

//Enum 
enum Direction1 {
  Up = 2,
  Down,
  Left,
  Right
}
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}


console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right)

console.log(Direction2.Left)

//Objects
// const user: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: 'John'
// }

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number


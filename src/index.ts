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

// Functions
function addNum(x: number, y: number): number {    // number after params is type for return value //need to give function params a type unless you disable implicit any
  return x + y
}

console.log(addNum(1, 2))

function log(message: string | number): void {                                 // use void for no return
  console.log(message)
}

log('hello')
log(99)
log(true)

// Interfaces
interface UserInterface  {
  readonly id: number,  // readonly makes immutable
  name: string,
  age?: number,  //? makes it optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

// type can be used with primitives and unions
type Point = number | string
//can not use interface for primitives or unions

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


// // Classes
// class Person {
//   // private id: number         //only access inside the class
//   protected id: number          //only access from this class or classes extended by this class
//   id: number
//   name: string
  
//   constructor(id: number, name: string) {
//     // console.log(123)
//     this.id = id
//     this.name = name
//   }

//   register() {    //Methods
//     return `${this.name} is now registered`
//   }
// }

// const brad = new Person(1, 'Brad Mad')
// const mike = new Person(2, 'Mike Pike')

// console.log(brad.register())

// console.log(brad, mike)


// Class Interfaces
interface PersonInterface  {
  id: number,
  name: string,
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string
  
  constructor(id: number, name: string) {
    // console.log(123)
    this.id = id
    this.name = name
  }

  register() {    //Methods
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Mad')
const mike = new Person(2, 'Mike Pike')

//Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// console.log(emp.name, emp.register())
// Basic types
let id: number = 5;
let company: string = 'hello';
let isPublished: boolean = true;
let x: any = 'test';

let ids: number[] = [1, 2, 3];

let arr: any[] = [1, true, 'test'];

// Tuple
let person: [number, string, boolean] = [1, 'hello', true];
// Tuple array
let employee: [number, string][];

employee = [[1, 'string1']];

// Union
let uid: string | number = 22;

uid = '22';

// Enum
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'john',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'john',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
interface PersonInterface {
  readonly id: number;
  name: string;
  register(): string;
}

const person1 = new Person(1, 'john');
const person2 = new Person(1, 'doe');

console.log(person1.register());

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee(3, 'jack', 'director');

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['john', 'doe']);

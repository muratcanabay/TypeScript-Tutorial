// Interfaces

interface Tree {
    leafType: string;
}

function printT(t: Tree) {
    console.log(t.leafType);
}

let tree = { name: "object", leafType: "needle" }
// printT(tree);

// Optional values

interface Shape1 {
    name?: string | null;
    numberOfEdge: number;
}

let triangle: Shape1 = {
    name: null,
    numberOfEdge: 3
}

let triangle2: Shape1 = {
    name: "triangle",
    numberOfEdge: 3
}

function noMean(s: Shape1): { name?: string, edgesquare: number } {
    // ?? anlamı null of define mı 
    let name = s.name ?? "no name";
    let edgesquare = s.numberOfEdge ** 2;
    return { name, edgesquare };
}

console.log("noMean() = ", noMean(triangle));
console.log("noMean() = ", noMean(triangle2));

// Interface readonly
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// Readonly alan olduğundan hata verir.
// p1.x = 11;
console.log("readonly", p1);

// ReadonlyArray < >
let array: ReadonlyArray<number> = [1, 2, 3, 4];
let changeArray = array;
// changeArray[0] = 2;

// Excess property of interface

interface Country {
    name: string;
    population: number;
    // Excess property of interface
    [propName: string]: number | string | undefined;
}

let turkey: Country = {
    name: "Turkey",
    population: 80,
    stateNumber: 81
};

console.log("excess interface properties: ", turkey);

// Interface function types

interface SearchFunc {
    (source: string, substr: string): boolean;
}

let sf: SearchFunc;
sf = function (src, substr2) {
    const result = src.search(substr2);
    return result > -1;
}
sf("murat", "123");

// Function as interface property

interface Labeled {
    label: string;
    print: () => void;
}

let o: Labeled = {
    label: "murat",
    print: () => { console.log("hello world!"); }
};

o.print();

// Indexable types

interface StringArray {
    [index: number]: number | string;
}
let strArray: StringArray = ["1", "2", 1, 2];
console.log("StringArray", strArray[0], strArray[3]);

interface Dictionary {
    [index: string]: string | number;
    dictionaryName: string;
    length: number;
}
let u: Dictionary = {
    dictionaryName: "Error Dict.",
    "a": "b", "c": "d",
    length: 4
};
console.log(u["b"])
console.log(u["a"])

// Class as an interface

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {
        this.currentTime.setHours(h);
        this.currentTime.setMinutes(m);
    }
}

let m: Clock = new Clock(16, 50);
m.setTime(new Date());
console.log("Clock = ", m.currentTime.toString());

// Extend multiple interfaces

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// Hybrid 

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let c: Counter = (function (start: number) { }) as Counter;
    c.interval = 10;
    c.reset = () => { };
    return c;
}
let h = getCounter();
h.interval = 1;
h(10);
h.reset();

// Interface extends class 

class Control { public state: any; }

interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
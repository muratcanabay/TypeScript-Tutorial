// Class

class Greeter {
    greeting: string;
    constructor(msg: string) {
        this.greeting = msg;
    }
}

{
    let g = new Greeter("Merhaba");
    console.log("Greet", JSON.stringify(g, undefined, 2));
}

class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(dist: number) {
        console.log(`${this.name} runs ${dist} meters`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Hav Hav!");
    }
}

class Snake extends Animal {
    move(dist: number = 5) {
        console.log(this.name);
        super.move(dist);
    }
}

{
    const d = new Dog("ares");
    d.bark();
    d.move(10);
    const s = new Snake("yılan");
    s.move();
}

{
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Rhino extends Animal {
        constructor() {
            super("Rhino");
        }
    }
    class Human {
        public name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    {
        let a = new Animal("Goat");
        let r = new Rhino();
        let murat = new Human("murat");

        a = r;
        a = murat;
    }
}

{
    // GET & SET Methods
    const maxLength = 10;
    class Human {
        private _fullName: string;
        constructor(name: string) {
            this._fullName = name;
        }
        get fullName(): string {
            return this._fullName;
        }
        set fullName(newName: string) {
            if (newName.length > maxLength) {
                throw new Error(`Name setted ${newName} is ${newName.length}. Only ${maxLength} allowed.`);
            }
            this._fullName = newName;
        }
    }
    const h = new Human("Murat");
    // h.fullName = "Murat Can Abay";
    console.log(h.fullName);
}

{
    // Static

    class Grid {
        // Her oluşturulan grid nesnesi için orijini 0, 0 yapar.
        static origin = { x: 0, y: 0 };
        constructor(public scale: number) { }
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale
    let point = { x: 2, y: 2 };
    let distance = grid1.calculateDistanceFromOrigin(point);
    console.log("Distance ", distance);
}

{
    // Abstract Class & Abstract Functions

    abstract class Animal {
        move() {
            console.log("Animal is moving");
        }
        abstract makeSound(): void;
    }

    class Dog extends Animal {
        makeSound() {
            console.log("Hav");
            super.move();
        }
    }
}

{
    // Nullish Check (Null or undefined) 
    function add(x: number, y?: number): number {
        return x + (y ?? 0);
    }
    console.log(add(5, 5));
    console.log(add(5));

    // optionals & default
    function add2(x: number, y: number = 0): number {
        return x + y;
    }
    console.log(add2(5, 5));
    console.log(add2(5));
}

{
    //rest
    function getName(firstName: string, ...restOfNames: string[]) {
        return firstName + ", " + restOfNames.join(", ");
    }
    console.log(getName("Murat"));
    console.log(getName("Can", "Ebubekir", "Sıddık", "Abay"));

    function add(x: number, ...restOfNumbers: number[]): number {
        let sum = x;
        for (let i = 0; i < restOfNumbers.length; i++) {
            sum += restOfNumbers[i];
        }
        return sum;
    }
    console.log(add(1, 1, 1, 1, 1, 5, 6));
}

{
    // overloads
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    interface CardIndex {
        suit: 0 | 1 | 2 | 3;
        index: number;
    }
    function pick(x: CardIndex): string;
    function pick(x: number): string;
    function pick(x: any): string {
        if (typeof x === "object") {
            return suits[x.suit % 4] + " : " + x.index % 13;
        } else if (typeof x === "number") {
            return suits[x % 4] + " : " + x % 13;
        }
        return "";
    }

    console.log(pick({ suit: 2, index: 45 }));
    console.log(pick(75));
    console.log(pick({ suit: 3, index: 76 }));
}

// Generics
{
    function printT<T>(a: T): T {
        console.log("A = " + a);
        return a;
    }

    printT("5");
    printT(5);
    printT({ name: "murat", surname: "abay" })
    printT(true);
}

{
    interface Labeled {
        label: string;
    }
    interface SLabeled extends Labeled {
        value: string;
    }
    interface NLabeled extends Labeled {
        value: number;
    }

    function printGenericArray<T extends Labeled>(arr: Array<T>): string {
        return arr.map(i => i.label).join();
    }

    console.log(printGenericArray(
        [
            { value: "nothing", label: "label" },
            { value: 1, label: "b" }
        ]
    ));
}
{
    interface Length {
        length: number;
    }

    function printAll<T extends Length>(arr: T): string {
        return arr.length + " ";
    }
    console.log(printAll([{ value: "A", label: "a" }, { value: 1, label: "b" }]));
    console.log(printAll("Osman"));
}

{
    class Bag<T extends { length: number }>{
        items: T;
        constructor(items: T) {
            this.items = items;
        }
        count() {
            return this.items.length;
        }
    }

    console.log(new Bag([1, 2, 3]).count());
    console.log(new Bag("Osman").count());
    console.log(new Bag({ length: 15 }).count());
}

{
    interface Color {
        name: string;
    }

    class Writing<T extends Color>{
        item: T;
        constructor(i: T) {
            this.item = i;
            console.log(this.item.name.length);
        }
    }

    console.log(new Writing({name : "yellow"}))
}

// Enum
// Indexli çalışır
enum Down{
    Up,
    Down,
    Right,
    Left
}

// Right' ın indexini otomatik 2 olarak verir.
enum Down2{
    Up = 0,
    Down = 1,
    Right,
    Left
}

console.log(Down2.Right);

// Baştaki değerleri string verdiğimiz için diğerlerini otomatik atayamıyor.
// Bu yüzden hepsine değer atamamız gerekli.
enum Down3{
    Up = "UP",
    Down = "DOWN",
    Right = "RIGHT",
    Left = "LEFT"
}

console.log(Down3.Right);

// Sadece sondakine index verdiğimiz için kendisinden sonrakilere index atayabilir.
// Sona başka bir enum eklersek ona da atamamız gerekir.
// Başa ekleyebilir fakat string değer veremeyiz.
enum Down4{
    Up ,
    Down ,
    Right,
    Middle,
    Left = "LEFT",
    // Middle2,
}

console.log(Down4.Middle, Down4.Left);

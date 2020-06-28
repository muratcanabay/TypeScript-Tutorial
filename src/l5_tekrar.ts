// Type Inference
// TypeScriptin tipleri versemesek bile tahmin edebilmesi.
{
    let x = [0, 1];

    // let y = x.map(function m(v: number) { return v + 1; });
    // let y = x.map(function m(v) { return v + 1; });
    // let y = x.map((v) => { return v + 1; });
    let y = x.map(v => v + 1);
    console.log({ x, y });
}

// Type Compatibility
// TypeScript tip olarak uyumlu olan nesneleri aynı olarak yorumlar.
{
    interface Named {
        name: string;
    }
    class Person {
        name: string = "";
    }

    let n: Named;
    n = new Person();
}

// foreach döngüsü

{
    let arr: number[] = [5, 3, 3, 4];
    arr.forEach(value => console.log(value));

    let arr2: number[] = [2, 5, 7, 1];
    let arr3: number[] = [];
    arr2.forEach(value => arr3.push(value + 1));
    arr3.forEach(value => console.log(value))
}

// Advanced Types
// Tipleri birleştirmek ortak method veya alanları almak vs vs.

{
    interface Bird {
        layEggs(): void;
        fly(): void;
        bird: true;
    }

    interface Fish {
        layEggs(): void;
        swim(): void;
        fish: true;
    }
    function getSmallPet(v: number): Fish | Bird {
        if (v % 2 === 1) {
            const f: Fish = {
                // Interface fonksiyonlarının içi burada dolduruluyor.
                swim: () => console.log("Swim"),
                layEggs: () => console.log("Fish egg"),
                fish: true
            };
            return f;
        }
        const b: Bird = {
            fly: () => console.log("Fly"),
            layEggs: () => console.log("Bird egg"),
            bird: true
        };
        return b;
    }
    let pet = getSmallPet(1);
    pet.layEggs();
    pet = getSmallPet(0);
    pet.layEggs();

    // Eğer pet balıksa
    if ((pet as Fish).fish) {
        (pet as Fish).swim();
        // Eğer pet kuşsa
    } else if ((pet as Bird).bird) {
        (pet as Bird).fly();
    }

    function move(pet: Fish | Bird) {
        if ("swim" in pet) {
            return pet.swim();
        }
        pet.fly();
    }

    move(pet);
}

// typeof
{
    function isNumber(n: any): boolean {
        if (typeof n === "number") {
            return true;
        }
        return false;
    }

    let b: boolean = isNumber("a");
    let b1: boolean = isNumber(5);
    console.log(b);
    console.log(b1);
}

// instanceof
{
    interface Creature {
        name: string;
    }

    class Human implements Creature {
        name: string = "human";
        weight: number = 0;
    }

    class Animal implements Creature {
        name: string = "animal";
        fly: boolean = false;
    }

    let h = new Human();
    h.name = "murat";
    h.weight = 75;

    let a = new Animal;
    a.name = "fly";
    a.fly = true;

    function hasHumanProp(t: Creature): boolean {
        if (t instanceof Human) {
            console.log("I am a human + ", t.weight);
            return true;
        }

        if (t instanceof Animal) {
            console.log("I am an animal + ", t.fly)
            return false;
        }
        return false;
    }

    hasHumanProp(h);
    hasHumanProp(a);
}

// Type Alias
// Tipleri birleştirmekte kullanılabilir.

{
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        if (typeof n === "string")
            return n;
        else
            return n();
    }

    let n: Name = "Murat";
    console.log(getName(n));

    function m(m: string): string {
        return m;
    }
    console.log(getName(m(n)));

    interface Square {
        kind: "square";
        size: number;
    }
    interface Rectangle {
        kind: "rectangle";
        height: number;
        width: number;
    }
    interface Circle {
        kind: "circle";
        radius: number;
    }
    interface Triangle {
        kind: "triangle",

    }
    type Shape = Square | Rectangle | Circle | Triangle;

    function area(s: Shape) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
            case "triangle": return 34;
        }
    }

    let s: Square = { kind: "square", size: 5 };
    let area2: number = area(s);
    console.log(area2);
}

// Method Chaining

{
    class BasicCalculator {
        constructor(protected value: number = 0) { };
        public currentValue() { return this.value; }
        public add(o: number) {
            this.value += o;
            return this;
        }
        public multiply(o: number) {
            this.value *= o;
            return this;
        }
    }

    let b = new BasicCalculator();
    b.add(1).multiply(5.2).multiply(9);
    console.log(b.currentValue());

    class ScientificCalculator extends BasicCalculator {
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
    }
    let s = new ScientificCalculator();
    console.log(s.add(1).multiply(5.23).sin().currentValue());
}

// keyof
// valueları almak için kullanılabilir.

{
    function pluck<T, K extends keyof T>(o: T, propNames: K[]) {
        return propNames.map(p => o[p]);
    }
    interface Car {
        brand: string;
        model: string;
        year: number;
    }

    let c: Car = { "brand": "Honda", model: "Civic", year: 2020 };
    console.log(pluck(c, ["brand", "model"]));
}


{
    interface Person {
        name: string;
        age: number;
    }
    interface PersonPartial {
        name?: string;
        age?: number;
    }
    interface PersonReadonly {
        readonly name: string;
        readonly age: number;
    }

    // Partial 
    // İstediğimiz özellikleri setleyip istediklerimizi setlemeyiz.
    type PP = Partial<Person>;

    // Readonly
    // Değerler bir kere setlendikten sonra değiştirilemez sadece okunur.
    type PR = Readonly<Person>;

    // Değerlerin girilmesini zorunlu hale getirir.
    type PPR = Required<PersonPartial>;

    let pp: PP = {}
    pp.age = 23;
    pp.name = "Murat Can";

    let pr: PR = { name: "Berkem", age: 24 };
    console.log(pr)

    let ppr: PPR = {name : "Aykut", age: 24};
}
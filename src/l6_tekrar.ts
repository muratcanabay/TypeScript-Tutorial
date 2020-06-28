// Symbols
// Aslında primitive bi type
// Unique ve immutable
// key olarak kullanılır.

{
    let s1 = Symbol("S");
    let s2 = Symbol("S");
    console.log("Symbol", s1 === s2, s1.valueOf(), s2.toString());

    let o = {
        [s1]: "1",
        [s2]: "2"
    };
}

// Iterators
{
    // for in - indexleri bastırır.
    let array = [1, 2];
    for (let i in array) {
        console.log("For in Array: ", i);
    }

    // for of - value ları bastırır.
    for (let i of array) {
        console.log("For of Array: ", i);
    }

    let set = new Set([1, 2, 3]);
    // Setlerde hata vermiyor fakat setlerin indexi olmadığında print etmez.
    // Bug
    // Sadece değerlerini bastırabiliriz.
    for (let i in set) {
        console.log("For in Set:", i);
    }

    for (let i of set) {
        console.log("For of Set", i);
    }

    let map = new Map<string, string>();
    map.set("name", "murat");
    map.set("age", "23");

    // Setlerde hata vermiyor fakat setlerin indexi olmadığında print etmez.
    // Bug
    // Sadece değerlerini bastırabiliriz.
    for (let i in map) {
        console.log("For in Map: ", i);
    }

    for (let i of map) {
        console.log("For of Map: ", i);
    }

    let object = { 'color': 'yellow', 'name': 'lemon' };
    // Objectlerde For of kullanılmıyor.
    for (let i in object) {
        console.log("For in Object: ", i);
    }

    // Determines whether an object has a property with the specified name.
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            console.log("")
        }
    }
}

// Modules
// const StringValidator = require("./l6/StringValidator");
import StringValidator from "./l6/StringValidator";
import ZipCodeValidator from "./l6/ZipCodeValidator";
import * as AllValidators from "./l6/AllValidators";
// import { AllValidators } from "./l6/AllValidators";

// import { AValidator, BValidator } from "./l6/AllValidators";
// AllValidators.

// import * as AllValidators from "./l6/AllValidators";

let sv: StringValidator = { isAcceptable: s => s.length > 1 };
console.log("Zip", new ZipCodeValidator().isAcceptable("12345"));

// Utility Types

{
    // Partial
    interface Todo {
        title: string;
        desc: string;
    }

    function updateTodo(t: Todo, n: Partial<Todo>) {
        return { ...t, ...n };
    }
    let t: Todo = { title: "1", desc: "2" };
    console.log({ t, nt: updateTodo(t, { desc: "3" }) });
    console.log(t)

    function freeze<T>(o: T): Readonly<T> {
        return Object.freeze(o);
    }
    const f = freeze(t);

    // Record
    // propertyleri birleştirir (ekler)
    interface PageInfo {
        title: string;
    }

    type Page = "home" | "about" | "contact";

    const x: Record<Page, PageInfo> = {
        about: { title: "about" },
        contact: { title: "contact" },
        home: { title: "home" }
    };

    interface Post {
        title: string;
        desc: string,
        puncLine: string;
        image: string;
    }

    // Pick 
    // Seçilen propertyleri alır.
    type PostPreview = Pick<Post, "image" | "title">;

    // Omit
    // Seçilen propertyleri çıkarır.
    type PostDetail = Omit<Post, "image" | "title">;

    const p: PostPreview = {
        image: "qweqweqwe",
        title: "dasdasdasd"
    };
    const pd: PostDetail = {
        desc: "ffffff",
        puncLine: "asdasdşlal"
    };

    function getA() {
        return Math.random() < 0.5 ? 1 : undefined;
    }
    const a = getA();
    
    if (a) {
        a;
    }

    // NonNullable
    // null ve undefined alanları almaz.
    type NNN = NonNullable<number | null | undefined>; // string
}
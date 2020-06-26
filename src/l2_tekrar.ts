//  Variable Declarations
// var - asla kullanma. (function scoped)
// let - sonradan değişecekse kullan. (block scoped)
// const - mümkün olan her zaman kullan.

// var
var a = 10;
// console.log(a);

function varTest() {
    var a = 9;
    return function varTest2() {
        var b = a - 1;
        return b;
    };
}
// console.log("varTest: ", varTest()(), "a: ", a);

function f3(init: boolean) {
    if (init) {
        let a = 10;
    }
    return a; // a var olunca bu değere ulaşamıyoruz çünkü a function scope içerisinde (let yap.)
}
// console.log("var init true:", f3(true), "false:", f3(false));

// var ile askenkron task sıkıntısı
for (var i = 0; i < 5; i++) {
    function a() { }
    // const a = ()=>{}
    setTimeout(function a() { console.log("loop bug: ", i); }, 300); // Bu fonksiyon asenkron olduğundan 5 yazdırır.
    // var değişkeninden dolayı
}

// var sorununu çözmek için
for (var i = 0; i < 5; i++) {
    //IIFE  Immediately Invoked Function Expression
    (function t(i: number) {//0,1
        setTimeout(function t() { console.log("loop fixed: ", i); }, 300);
    }(i));
}

// let ile asenkron task düzeliyor
for (let i = 0; i < 5; i++) {
    function a() { }
    // const a = ()=>{}
    setTimeout(function a() { console.log("loop bug: ", i); }, 300);
}

// let
// inline block olduğundan dolayı ilk bu block çalışır.
{
    let aykut = "sirilki";
    aykut = "gigi khadir";
    // console.log("gigi khadir: ", aykut);
}
// Block scoped olduğu dışarıda bunu dışarıda kullanamaayız
// console.log("gigi khadir: ", aykut); 

// infinite loop
// for (var i = 5; i < 10; i++) {
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log("dış",i)
// }

// const değişmez demek (let'in değişmeyeni)
const c = "murat";
// c = "ahmet"; cannot assing hatası verir.

// Destructuring Amacı kod okunaklığını arttırmak
// Array destructuring

let rehber = ["murat", "abay"];
const [isim, soyisim] = rehber;

// console.log(isim, soyisim);

// Function destructuring

dovizKuruHesapla([200, 6.80])
function dovizKuruHesapla([miktar, guncelkur]: [number, number]) {
    const tlDoviz: number = guncelkur * miktar;
    console.log(`${miktar} amerikan doları = ${guncelkur * miktar}`);
}

let numbs = [1, 2, 3, 4, 4, 6, 1, 2, 3];
let [first, second, third, ...kalanlar] = numbs;
console.log("first: ", first);
console.log("second: ", second);
console.log("third: ", third);
console.log("rest: ", kalanlar);

// Object Destructuring

{
    let obj = { first: "ilk", second: "ikinci", third: "üçüncü" };
    let { first, second, third } = obj;
    console.log(first, second, third);
}

// Arrow Function

let dice = () => Math.floor(Math.random() * 6) + 1;

// Function default value declaration

function something({ a, b = 100 }: { a: number, b?: number; }) {
    return a + b;
}

function smt(num: number = 50) {
    return num;
}

let z = smt();
let y = smt(40);
console.log("z ", z, " y ", y);

// Interface 

interface Human {
    name: string;
    age: number;
    nationality: string;
    sex: string;
};

let zeynep: Human = {
    name: "Zeynep Ozkan",
    age: 20,
    nationality: "turkish",
    sex: "female",
};

console.log(zeynep)

let { age, ...rest } = zeynep;
console.log("Rest: ", rest);

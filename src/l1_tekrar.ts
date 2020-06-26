// Numeric Types

let x: number = 6;
let decimal: number = 5;
let hex: number = 0x0005;
let binary: number = 0b1010;
let octal: number = 0o744;

// console.log("x: ", x)
// console.log("decimal: ", decimal)
// console.log("hex: ", hex)
// console.log("binary: ", binary)
// console.log("octal: ", octal)

// Strings and String Template

let str: string = "öşğı";
let str2: string = 'çşğ';
let stringTemplate: string = `123 ${octal} sadsad`;
let strTemplate: string = "${octal} \nmurat";

// console.log("string: ", str)
// console.log("string2: ", str2)
// console.log("stringTemplate: ", stringTemplate)
// console.log("stringTemplate: ", strTemplate)

// Array

let numArray: number[] = [1, 2, 3, 4];
let numArray2: Array<number | string> = [5, 6, 7, 8, 9];

// console.log("number array", numArray);
// console.log("number array2", numArray2);

// Tuple (Boyutları sabit array)

let tuple = ["murat", 123];
tuple.push("abay")

let tuple2: [string, number | string, boolean] = ["can", 2, true];

// console.log("Tuple ", tuple);
// console.log("Tuple2 ", tuple2);
// Tuple'ın 2. elemanı string olsa bile tanımlarken belirtmedik.
// Bu yüzden substring() methodunu kullanmak için assert yapmamız gerekiyor.
// console.log("Tuple substring", (tuple[2] as string).substring(1))
// console.log("Tuple 2 substring", tuple2[0].substring(0, 2));


// Enum (Aslında bir array)

enum Car { Ford = "Mustang", Mercedes = "G 500" };
let mustang: Car = Car.Ford;

console.log("Mustang: ", mustang)

// any (Değişken tipi belli olmayan )
// az kullanılması tavsiye edilir.

let num: any = 5;
num = 6;
num = { "isim": "murat" };
console.log("num: ", num)


// void
hesapla(2, 3);
function hesapla(num1: number, num2: number): void {
    console.log("sum = ", num1 + num2);
}

// undefined & null

let test = undefinedTest();
// Hata verir null != undefined
// let test2 = undefinedTest(null);
console.log("test : ", test)
// console.log("test2 : ", test2)
function undefinedTest(x?: number): any {
    return x;
}

// Never (değer döndürmez)
// Kullanım alanına örnek:
// Asla değer dönmeyeceği kesin olan yerlerde kullanılabilir.

// ?
function neverTest(): never {
    throw Error("Hata");
}
const lowerString = (arg: string): string => {
    return arg.toLowerCase();
}

console.log(lowerString("bonjour"));
//console.log(lowerString(22));

let toto: string = "Toto";
let isOk: boolean = true;
let myNumber: number = 23;

let firstArray: string[] = [];
firstArray.push("hello");

let secondArray = [12, 23];

let myTuple: [string, number] = ["one", 24];

let myObject: object = {
    name: "toto",
    age: 23
}
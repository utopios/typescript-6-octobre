// ex:1
let nom: string;

//ex:2
let speed: number = 25;

//ex:3
let loading: boolean;

let colours: string[] = [];

colours.push('red');

console.log(colours);

let number: object = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
}

//console.log(number.age); //faux

//Type par attribution
let number1: {
    firstName: string,
    age: number,
    isLoggedIn: boolean
} = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
}

console.log(number1.age);

//Type par inférence
let number2 = {
    firstName: "Dupont",
    age: 20,
    isLoggedIn: true
}

console.log(number2.age);

let infos:[string, number];


// var toto = "toto";
 
// const tata = [23, 24];

// tata[0] = 21;

// console.log(tata);

// const sayHello = name => console.log("hello world" + name);

// sayHello("toto");

// const obj1 = {
//     firstName: "John",
//     lastName: "Doe",
//     toString: function() {return this.firstName + ' ' + this.lastName}
// }

// console.log(obj1.toString())

// const obj2 = {
//     firstName: "John",
//     lastName: "Doe",
//     toString: () => {return this.firstName + ' ' + this.lastName}
// }

// console.log(obj2.toString())

// const user = {
//     ...obj1,
//     login: 'john.doe'
// }

// console.log(user);

// const {firstName, lastName} = user;

// console.log(firstName, lastName);

// const a = [1, 2, 3, 4, 5]
// const [first, second] = a

// console.log(first, second);

// let phrase = `
// bonjour
// le 
// monde
// ${firstName}
// `
// console.log(phrase);

// class Person {

//     static counter = 0;

//     constructor(firstName, lastName){
//         this.id = ++Person.counter;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     hello() {
//         return `Hello my name is ${this.firstName} ${this.lastName}`
//     }
// }

// const personne1 = new Person("John", "Doe");

// console.log(personne1.myvar)

// console.log(personne1.hello())

// class Student extends Person {

//     constructor(firstName, lastName, backpack) {
//         super(firstName, lastName);
//         this.backpack = backpack;
//     }

//     hello() {
//         return super.hello() + `backpack : ${this.backpack}`
//     }

//     get backpack() {
//         return this._backpack;
//     }

//     set backpack(value) {
//         this._backpack = value;
//     }



// }

// const myStudent = new Student("John", "Doe", true);

// console.log(myStudent.hello())

// function calculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// calculator(1, 2, (result) => console.log(result));

// let timer = 1;

// setInterval( () => {
//     timer++
// }, 1000)

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(timer%2 ==0) {
//             resolve({toto: "bonjour"});
//         } else {
//             reject("message erreur")
//         }
//     }, 3000)
// })

// myPromise
// .then((res) => {
//     console.log(res);
// })
// .catch((err => {
//     console.log(err);
// }));


// const promiseAsync = async () => {
//     try{
//         let result = await myPromise
//         console.log(result);
//     }catch(ex){
//         console.log(ex)
//     }
// }

// promiseAsync();

import {myName as xyz} from './module.js';

console.log(xyz);
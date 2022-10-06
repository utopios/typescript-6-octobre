// const lowerString = (arg: string): string => {
//     return arg.toLowerCase();
// }

// console.log(lowerString("bonjour"));
// //console.log(lowerString(22));

// let toto: string = "Toto";
// let isOk: boolean = true;
// let myNumber: number = 23;

// let firstArray: string[] = [];
// firstArray.push("hello");

// let secondArray = [12, 23];

// let myTuple: [string, number] = ["one", 24];

// let myObject: object = {
//     name: "toto",
//     age: 23
// }

// enum Role {
//     Admin,
//     Moderator,
//     User
// }

// let myRole: Role;

// myRole = Role.User;

// let myObjectWithEnum = {
//     name: "Hello",
//     role: Role.Admin,
//     isAdmin: function(): boolean { return this.role === Role.Admin }
// }

// console.log('mon utilisateur est admin ?' + myObjectWithEnum.isAdmin())


// //type Any
// const myFunction = (arg: any): void => {
//     console.log(arg.length);
// }

// myFunction(3);

// //Type Unknown + vérifications
// let str: unknown;
// str = "bonjour";

// if(typeof str === 'string') {
//     console.log(str.length);
// } else {
//     console.log(str);
// }

// const helloWorld = (x: number, fun: Function) => {
//     fun(x);
// }

// helloWorld(1, (x: number) => console.log(x));

// const addAge = (x: number, fun:(x:number)=> void) => {
//     fun(x);
// }

// addAge(23, (x: number) => console.log(x));

// const sayHelloFullName = (firstName: string  = "John", lastName: string, middleName?: string) => {
//     return `Bonjour ${firstName} ${middleName == undefined ? "" : middleName} ${lastName}`
// }

// console.log(sayHelloFullName("toto", "tata", "titi"));
// console.log(sayHelloFullName("toto", "tata"));
// console.log(sayHelloFullName(undefined, "tata"));

// let inconnu: unknown = "je suis une chaine";

// let longueur: number = (inconnu as string).length;

// console.log(longueur);

// let myForm = document.getElementById("#name") as HTMLFormElement

class Person {
    private static counter: number = 0;
    protected readonly id: number;
    protected _firstName: string;
    protected _lastName: string;

    constructor(firstName: string, lastName?: string) {
        this.id = ++Person.counter;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    toString(): string {
        return `Fullname ${this._firstName} ${this._lastName}`
    }

}

class Student extends Person {
    private _backpack: boolean;

    constructor(firstName, lastName, backpack) {
        super(firstName, lastName);
        this._backpack = backpack;
    }

    toString(): string {
        return super.toString() + ` backpack ? ${this._backpack}`
    }
}

let myPerson: Person = new Person("Toto", "Tata");
let myStudent: Student = new Student("Titi", "Tutu", true);

let persons: Person[] = [];

persons.push(myPerson);

console.log(myPerson.toString());
console.log(myStudent.toString());
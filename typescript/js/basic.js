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
let myAny = "toto";
const myFunction = (arg) => {
    console.log(arg.length);
};
myFunction(3);
let str;
str = "bonjour";
if (typeof str === 'string') {
    console.log(str.length);
}
else {
    console.log(str);
}

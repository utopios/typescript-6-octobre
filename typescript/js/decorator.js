// function simpleDecoratorClass(target: Function): void {
//     target.prototype.id = Math.random();
// }
// // function DemoDecorator(): ClassDecorator {
// //     return function(target:any) : any {    
// //         target.prototype.id = Math.random();
// //     }
// // }
// @simpleDecoratorClass
// export class UserWithDecorator {
//     constructor(private name:string) {
//     }
// } 
// function demoDecoratorMethod(...args: any): MethodDecorator {
//     return function(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value;
//         descriptor.value = (...args: any) => {
//             const resultMethod = originalMethod.apply(target, args);
//             return resultMethod + 2;
//         }
//     }
// }
// class Calculatrice {
//     @demoDecoratorMethod()
//     add(a: number, b: number) {
//         return a + b
//     }
// }
// const maCalculatrice = new Calculatrice();
// console.log(maCalculatrice.add(1, 1));
// const userWithDecorateur = new UserWithDecorator("test")
// //@ts-ignore
// console.log(userWithDecorateur.id)

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function simpleDecoratorClass(target) {
    target.prototype.id = Math.random();
}
function reportableClassDecorator(constructor) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}
let BugReport = class BugReport {
    type = "report";
    title;
    constructor(t) {
        this.title = t;
    }
};
BugReport = __decorate([
    reportableClassDecorator
], BugReport);
function demoDecoratorMethod(...args) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            const resultMethod = originalMethod.apply(target, args);
            return resultMethod + 2;
        };
    };
}
class Calculatrice {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    demoDecoratorMethod()
], Calculatrice.prototype, "add", null);
const maCalculatrice = new Calculatrice();
console.log(maCalculatrice.add(1, 1));
const myUser = new BugReport("toto");
console.log(myUser);

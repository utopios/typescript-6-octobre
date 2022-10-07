function simpleDecoratorClass(target: Function): void {
    target.prototype.id = Math.random();
}

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }

function demoDecoratorMethod(...args: any): MethodDecorator {
    return function(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (...args: any) => {
            const resultMethod = originalMethod.apply(target, args);
            return resultMethod + 2;
        }
    }
}

class Calculatrice {

    @demoDecoratorMethod()
    add(a: number, b: number) {
        return a + b
    }
}

const maCalculatrice = new Calculatrice();

console.log(maCalculatrice.add(1, 1));

const myUser = new BugReport("toto");

console.log(myUser);
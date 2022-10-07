function addProperty<T>(name: string, value: T): ClassDecorator {
    return function(target: any) : void {
        target.prototype[name] = value;
    }
}

@addProperty('date', new Date())
class UserWithDate {
    constructor() {

    }
}

const userDate = new UserWithDate();

//@ts-ignore
console.log(userDate.date);
class Base {
    int;
    constructor() {
    }
}
//let maBase = new Base();
class Basic extends Base {
    constructor() {
        super();
    }
    toString() {
        return 'Hello World';
    }
}
let b = new Basic();
console.log(b.toString());

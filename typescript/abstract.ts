abstract class Base {
    private int: number;

    constructor() {

    }

    abstract toString(): string
}

//let maBase = new Base();

class Basic extends Base {
    
    constructor() {
        super()
    }

    toString(): string {
        return 'Hello World';
    }
}

let b: Basic = new Basic();

console.log(b.toString());
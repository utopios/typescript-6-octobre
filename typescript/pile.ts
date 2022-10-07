class Pile<T extends HasId> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    public empiler(element: T): void {
        this.elements.push(element);
    }

    public depiler(): void {
        this.elements.pop();
    }

    public getById(id: number): T | undefined {
        return this.elements.find(e => e.id === id);
    }
}

interface HasId {
    id: number
}

class User implements HasId {
    public id: number;
    public name: string;

    private static counter: number = 0;

    constructor(name: string) {
        this.id = ++ User.counter;
        this.name = name;
    }
}

const maPile = new Pile<User>();

maPile.empiler(new User("Toto"));
maPile.empiler(new User("Tata"));

console.log(maPile.getById(1));
console.log(maPile.getById(2));
console.log(maPile.getById(3));

maPile.depiler();

console.log(maPile.getById(2));
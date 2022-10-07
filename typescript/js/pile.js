class Pile {
    elements;
    constructor() {
        this.elements = [];
    }
    empiler(element) {
        this.elements.push(element);
    }
    depiler() {
        this.elements.pop();
    }
    getById(id) {
        return this.elements.find(e => e.id === id);
    }
}
class User {
    id;
    name;
    static counter = 0;
    constructor(name) {
        this.id = ++User.counter;
        this.name = name;
    }
}
const maPile = new Pile();
maPile.empiler(new User("Toto"));
maPile.empiler(new User("Tata"));
console.log(maPile.getById(1));
console.log(maPile.getById(2));
console.log(maPile.getById(3));
maPile.depiler();
console.log(maPile.getById(2));

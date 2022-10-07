export class Cart {
    static counter = 0;
    id;
    products = [];
    payment;
    total;
    constructor() {
        this.id = ++Cart.counter;
    }
    getTotal() {
        this.total = 0;
        this.products.forEach(p => {
            this.total += p.price * p.quantity;
        });
        return this.total;
    }
}

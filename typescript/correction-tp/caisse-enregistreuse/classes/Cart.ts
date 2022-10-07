import { Product, WithId } from './Product'
import { Payment } from './Payment'

export interface InCart {
    quantity: number,
    reduction: number
}

export class Cart implements WithId {
    public static counter: number = 0;
    public id: number;
    public products: (WithId & Product & InCart)[] = [];
    public payment: Payment;
    public total: number;

    constructor() {
        this.id = ++Cart.counter;
    }

    getTotal(): number {
        this.total = 0;
        this.products.forEach(p => {
            this.total += p.price * p.quantity;
        })

        return this.total;
    }
}
import { Payment } from './Payment'

export class CardPayment extends Payment {
    constructor() {
        super()
    }

    pay(amount: number): boolean {
        return amount > 0;
    }
}
import { Payment } from './Payment';
export class CardPayment extends Payment {
    constructor() {
        super();
    }
    pay(amount) {
        return amount > 0;
    }
}

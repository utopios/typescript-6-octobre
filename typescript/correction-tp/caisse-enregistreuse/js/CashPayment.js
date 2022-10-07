import { Payment } from './Payment';
export class CashPayment extends Payment {
    givenAmount;
    returnMoney;
    constructor(givenAmount) {
        super();
        this.givenAmount = givenAmount;
    }
    pay(amout) {
        if (amout <= this.givenAmount) {
            this.returnMoney = this.givenAmount - amout;
            return true;
        }
        return false;
    }
    getChange() {
        return this.returnMoney;
    }
}

import { Payment } from './Payment'

export class CashPayment extends Payment {

    private givenAmount: number;
    private returnMoney: number;

    constructor(givenAmount: number) {
        super()
        this.givenAmount = givenAmount;
    }

    pay(amout: number): boolean {
        if(amout <= this.givenAmount) {
            this.returnMoney = this.givenAmount - amout;
            return true;
        }
        return false;
    }

    getChange() {
        return this.returnMoney;
    }
}
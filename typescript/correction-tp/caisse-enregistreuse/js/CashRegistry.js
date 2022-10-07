import { Cart } from "./Cart";
import { CashPayment } from "./CashPayment";
import { CardPayment } from "./CardPayment";
export class CashRegistry {
    products = [];
    carts = [];
    static productCounter;
    constructor() {
    }
    addProduct(product) {
        const oldLength = this.products.length;
        return this.products.push({ ...product, id: ++CashRegistry.productCounter }) == oldLength + 1;
    }
    getProductById(id) {
        return this.products.find(p => { p.id == id; });
    }
    createCart() {
        return new Cart();
    }
    addProductToCart(idProduct, cart) {
        const pro = this.getProductById(idProduct);
        if (pro !== undefined) {
            const pExist = cart.products.find(p => p.id == pro.id);
            if (pExist !== undefined) {
                pExist.quantity++;
            }
            else {
                cart.products.push({ ...pro, quantity: 1, reduction: 0 });
            }
            return true;
        }
        return false;
    }
    payWithCard(cart) {
        const payment = new CardPayment();
        if (payment.pay(cart.total)) {
            cart.payment = payment;
            this.carts.push(cart);
            return true;
        }
        return false;
    }
    payWithCash(cart, amount) {
        const cashPayment = new CashPayment(amount);
        if (cashPayment.pay(cart.total)) {
            cart.payment = cashPayment;
            this.carts.push(cart);
            return [true, cashPayment.getChange()];
        }
        return [false, 0];
    }
}

import { Batiment } from './Batiment.js'

export class Maison extends Batiment {
    constructor(adresse, pieces) {
        super(adresse);
        this.pieces = pieces;
    }

    get pieces() {
        return this._pieces;
    }

    set pieces(value) {
        this._pieces = value;
    }

    toString() {
        return `${super.toString()} nb pièces : ${this.pieces}`
    }
}
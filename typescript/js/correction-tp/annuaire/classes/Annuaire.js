"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annuaire = void 0;
class Annuaire {
    contacts;
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    findContact(searchMethod) {
        const result = [];
        for (let c of this.contacts) {
            if (searchMethod(c)) {
                result.push(c);
            }
        }
        return result;
    }
}
exports.Annuaire = Annuaire;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    firstName;
    lastName;
    email;
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    toString() {
        return (`Nom: ${this.lastName} prenom : ${this.firstName}`);
    }
}
exports.Contact = Contact;

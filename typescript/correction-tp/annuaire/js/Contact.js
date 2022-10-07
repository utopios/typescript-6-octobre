"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var Contact = /** @class */ (function () {
    function Contact(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Contact.prototype.toString = function () {
        return ("Nom: ".concat(this.lastName, " prenom : ").concat(this.firstName));
    };
    return Contact;
}());
exports.Contact = Contact;

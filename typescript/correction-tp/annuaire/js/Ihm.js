"use strict";
exports.__esModule = true;
exports.Ihm = void 0;
var Annuaire_1 = require("./Annuaire");
var Contact_1 = require("./Contact");
var readline = require("readline-sync");
var Ihm = /** @class */ (function () {
    function Ihm() {
        this.annuaire = new Annuaire_1.Annuaire();
    }
    Ihm.prototype.menu = function () {
        console.log("1 -- Créer un contact");
        console.log("2 -- Rechercher un contact");
        console.log("3 -- Afficher les contacts");
    };
    Ihm.prototype.addContact = function () {
        var firstName = readline.question("Saisir le prénom : ");
        var lastName = readline.question("Saisir le nom : ");
        var email = readline.question("Saisir l'email : ");
        var contact = new Contact_1.Contact(firstName, lastName, email);
        this.annuaire.addContact(contact);
    };
    Ihm.prototype.displayContacts = function () {
        for (var _i = 0, _a = this.annuaire.contacts; _i < _a.length; _i++) {
            var c = _a[_i];
            console.log(c.toString());
        }
    };
    Ihm.prototype.searchContact = function () {
        var mot = readline.question("Saisir le mot recherché");
        return this.annuaire.findContact(function (c) { return c.firstName === mot || c.lastName === mot || c.email === mot; });
    };
    Ihm.prototype.searchContactDisplay = function () {
        this.searchContact().forEach(function (c) { return console.log(c.toString()); });
    };
    Ihm.prototype.start = function () {
        var choice;
        do {
            this.menu();
            choice = readline.question("Choisir une option : ");
            switch (choice) {
                case '1':
                    this.addContact();
                    break;
                case '2':
                    this.searchContactDisplay();
                    break;
                case '3':
                    this.displayContacts();
                    break;
            }
        } while (choice != '0');
    };
    return Ihm;
}());
exports.Ihm = Ihm;

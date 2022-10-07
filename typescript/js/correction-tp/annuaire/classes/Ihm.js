"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ihm = void 0;
const Annuaire_1 = require("./Annuaire");
const Contact_1 = require("./Contact");
const readline = __importStar(require("readline-sync"));
class Ihm {
    annuaire;
    constructor() {
        this.annuaire = new Annuaire_1.Annuaire();
    }
    menu() {
        console.log("1 -- Créer un contact");
        console.log("2 -- Rechercher un contact");
        console.log("3 -- Afficher les contacts");
    }
    addContact() {
        let firstName = readline.question("Saisir le prénom : ");
        let lastName = readline.question("Saisir le nom : ");
        let email = readline.question("Saisir l'email : ");
        let contact = new Contact_1.Contact(firstName, lastName, email);
        this.annuaire.addContact(contact);
    }
    displayContacts() {
        for (let c of this.annuaire.contacts) {
            console.log(c.toString());
        }
    }
    searchContact() {
        let mot = readline.question("Saisir le mot recherché");
        return this.annuaire.findContact(c => c.firstName === mot || c.lastName === mot || c.email === mot);
    }
    searchContactDisplay() {
        this.searchContact().forEach(c => console.log(c.toString()));
    }
    start() {
        let choice;
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
    }
}
exports.Ihm = Ihm;

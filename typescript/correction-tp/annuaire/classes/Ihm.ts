import { Annuaire } from './Annuaire'
import { Contact } from './Contact'
import * as readline from 'readline-sync'

export class Ihm {
    public annuaire: Annuaire;

    constructor() {
        this.annuaire = new Annuaire();
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

        let contact = new Contact(firstName, lastName, email);

        this.annuaire.addContact(contact);
    }

    displayContacts() {
        for(let c of this.annuaire.contacts) {
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

    start(): void {
        let choice: string;

        do {
            this.menu()
            choice = readline.question("Choisir une option : ");
            switch(choice) {
                case '1':
                    this.addContact();
                    break;
                case '2':
                    this.searchContactDisplay();
                    break;
                case '3':
                    this.displayContacts()
                    break;
            }

        } while (choice != '0')
    }
}
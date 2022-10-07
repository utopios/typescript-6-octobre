import { Contact } from './Contact';

export class Annuaire {

    public contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    addContact(contact: Contact) {
        this.contacts.push(contact);
    }

    findContact(searchMethod: (contact: Contact) => boolean) {
        const result: Contact[] = [];
        for(let c of this.contacts) {
            if(searchMethod(c)) {
                result.push(c);
            }
        }
        return result;
    }
}
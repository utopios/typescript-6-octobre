import * as readline from 'readline-sync';
import { Maison } from './Maison.js'
import { Batiment } from './Batiment.js'

export class Ihm {
    constructor() {
        this.batiments = [];
        this.maisons = [];
    }

    menu() {
        console.log("1 -- Créer un batiment");
        console.log("2 -- Créer une maison");
        console.log("3 -- Affichger batiments");
        console.log("4 -- Afficher maison");
    }

    addMaison() {
        let adresse = readline.question("Saisir une adresse :");
        let pieces = readline.question("saisir le nombre de pièces");
        this.maisons.push(new Maison(adresse, pieces));
    }

    addBatiment() {
        let adresse = readline.question("Saisir une adresse :");
        this.batiments.push(new Batiment(adresse));
    }

    displayMaisons() {
        this.maisons.forEach((maison) => console.log(maison.toString()));
    }

    displayBatiments() {
        this.batiments.forEach((batiment) => console.log(batiment.toString()));
    }

    start() {
        let choix;

        do {
            this.menu();
            choix = readline.question("Veuillez sélectionner une options");

            switch(choix) {
                case '1':
                    this.addBatiment();
                    break;
                case '2':
                    this.addMaison();
                    break;
                case '3':
                    this.displayBatiments();
                    break
                case '4':
                    this.displayMaisons();
                    break
            }

        } while(choix != '0')
    }
}
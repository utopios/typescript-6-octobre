//Union type
let strOrNum: string | number;

strOrNum = 12;
strOrNum = "Bonjour";

type stringOrNumber = string | number;

let strNum: stringOrNumber;

let monTableau: stringOrNumber[];

monTableau.push(23);
monTableau.push("hello");

//Intersection type
interface Poisson {
    nom: string,
    yeux: number
}

interface Couleur {
    href: string
}

let poissonRouge: Poisson & Couleur;

type PoissonRed = Poisson & Couleur;

poissonRouge = {
    nom: "bobo",
    yeux: 3,
    href: "#FFFFFF"
}


//Litteral type
let directions: 'haut' | 'bas' | 'droite' | 'gauche';

type Direction = 'haut' | 'bas' | 'droite' | 'gauche';

//Conditional type

interface Animal {
    vivre(): void;
}

interface Chien extends Animal {
    aboyer(): void
}

type isExtented = Chien extends Animal ? number : string;

type isNotExtended = RegExp extends Animal ? number : string;



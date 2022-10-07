class House {
    elements;
    add(element) {
        this.elements.push(element);
    }
}
const myDragon = new House();
myDragon.add({ name: "Toto", description: "Dragon" });
const myCards = new House();
myCards.add({ cartes: 54, description: "jeu" });
function getData(arg) {
    return arg;
}

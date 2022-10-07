class House<T extends Description> {
    private elements: T[];

    public add(element: T): void {
        this.elements.push(element);
    }
}

interface Description {
    description: string
}

interface Dragon extends Description {
    name: string
}

interface Card extends Description {
    cartes: number
}

const myDragon = new House<Dragon>();

myDragon.add({name: "Toto", description: "Dragon"});

const myCards = new House<Card>();

myCards.add({cartes: 54, description: "jeu"})

function getData<T>( arg: T ): T {
    return arg
}

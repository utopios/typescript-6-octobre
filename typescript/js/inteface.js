class Lion {
    pattes;
    yeux;
}
const afficherAnimal = (a) => {
    console.log(a.pattes);
    console.log(a.yeux);
};
afficherAnimal({ pattes: 3, yeux: 24, chanter: (x) => console.log(x) });
const obj = {
    pattes: 12,
    yeux: 24
};

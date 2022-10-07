function safeSetProp(obj, key, value) {
    obj[key] = value;
}
const objet12 = {
    id: 1,
    name: "toto",
    age: 12
};
safeSetProp(objet12, 'name', 'xyz');
console.log(objet12.name);
//safeSetProp(objet12, 'id', 12);

type MyExclude<T, U> = T extends U ? never : T;

type Ab = Exclude<'A' | 'B' | 'C', 'C'>;

type excludeChaines = Exclude<'A' | 'Toto' | 2 | 23, string>

function safeSetProp<T, K extends Exclude<keyof T, 'id'>>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
}



const objet12 = {
    id: 1,
    name: "toto",
    age: 12
}
type x = typeof objet12;
type y = keyof x;

safeSetProp(objet12, 'name', 'xyz');
console.log(objet12.name);
//safeSetProp(objet12, 'id', 12);
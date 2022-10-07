interface WebUser {
    idPerson: number,
    name: string,
    age: number;
}

type anonymousPerson = Omit<WebUser, 'idPerson'>;
//KeyOf

interface IUser {
    name: string,
    age: number
};

type KeysOfUser = keyof IUser;


const key: KeysOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
};

const u2ser: IUser = {
    name: 'Vasya',
    age: 30
};

const userName = getValue(u2ser, 'name');

console.log(userName);
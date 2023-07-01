// Partial, Required, Readonly

interface User2 {
    name: string;
    age?: number;
    email: string;
}

// partial - делает все поля необязательными
// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
type partial = Partial<User2>;
const p1: partial = {};

// required - делает все поля обязательными
// type Required<T> = { [P in keyof T]-?: T[P]; }
type required = Required<User2>;


type readonly = Readonly<User2>;

type requiredAndReadonly = Required<Readonly<User2>>;
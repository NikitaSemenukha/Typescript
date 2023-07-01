// Return Type, Parameters, ConstructorParameters

class User123 {
    constructor(public id: number, public name: string) {}
}

function getData(id: number): User123 {
    return new User123(id, 'Вася');
}

type RT = ReturnType<typeof getData>;

type PT = Parameters<typeof getData>[0];

type RT2 = ReturnType<() => void>; 
type RT3 = ReturnType<<T>() => T>; 
type RT4 = ReturnType<<T extends string>() => T>;

type CP = ConstructorParameters<typeof User123>
function ToString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString();
    }

    switch (typeof data) {

        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}


console.log(ToString(1));
console.log(ToString(true));
console.log(ToString('atdfgh'));
console.log(ToString({ nik: 'fgh', age: 10 }));
// toString(() => console.log(123));

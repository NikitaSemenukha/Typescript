// infer

function runTransaction(transaction: {
    fromTo: [string, string]
}) {
    console.log(transaction);
}

const transaction: GetFirstArg<typeof runTransaction> = {
    fromTo: ['1', '2']
}
runTransaction(transaction);
// с помощью типа мы вытащили первый аргумент функции который туда передадим
type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
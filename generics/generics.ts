const num: Array<number> = [1, 2, 3];


async function test() {
    const a = await new Promise<number>((resolve, reject) => {
        resolve(1);
    });

};

//  Record позволяет передать словарь с парой ключ-значение, два дженерика, стринг и булеан, в данном случае
const check: Record<string, boolean> = {
    driv: true,
    app: false
};
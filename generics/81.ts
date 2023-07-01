// Awaited

type A = Awaited<Promise<string>>;
type b = Promise<string>;

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{ name: 'FG', url: 'DFG' }]
}

type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x];
}
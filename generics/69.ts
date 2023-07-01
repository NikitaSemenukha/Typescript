// interface IData {
//     group: number;
//     name: string;
// };

// function groupObjects<T, K extends keyof T>(obj: T[], key: K): T[][] {
//     const sortedData = [...obj].sort((a, b) => a[key] > b[key] ? 1 : -1);
//     const groupedData: T[][] = [];

//     sortedData.forEach((item, index) => {
//         if (index === 0 || item[key] !== sortedData[index - 1][key]) {
//             groupedData.push([item]);
//         } else {
//             groupedData[groupedData.length - 1].push(item);
//         }
//     });

//     return groupedData;
// }

// const data: IData[] = [
//     { group: 1, name: 'd' },
//     { group: 2, name: 'a' },
//     { group: 3, name: 'b' },
//     { group: 1, name: 'c' },
// ];

// console.log(groupObjects(data, 'group'));


interface IData {
    group: number;
    name: string;
};

interface IGroup<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
    return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        } else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}

function groupObjects<T extends Record<K, string | number>, K extends keyof T>(
    obj: T[],
    key: K
): Record<string | number, T[]> {
    const sortedData = [...obj].sort((a, b) => (a[key] > b[key] ? 1 : -1));

    const groupedData: Record<string | number, T[]> = {};

    sortedData.forEach((item) => {
        const itemKey = item[key];
        if (!groupedData[itemKey]) {
            groupedData[itemKey] = [];
        }

        groupedData[itemKey].push(item);
    });

    return groupedData;
}


const data: IData[] = [
    { group: 1, name: 'd' },
    { group: 2, name: 'a' },
    { group: 3, name: 'b' },
    { group: 1, name: 'c' },
];

console.log(groupObjects(data, 'group'));
console.log(group(data, 'group'));
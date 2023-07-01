type SortDirection = 'ascending' | 'descending';

interface MyObject {
    id: number;
    str: string;
}

function sortObjects<T extends { id: number }>(
    data: T[],
    direction: SortDirection
): T[] {
    const sortedData = [...data];
    sortedData.sort((a, b) =>
        direction === 'ascending' ? a.id - b.id : b.id - a.id
    );
    return sortedData;
}

const objects: MyObject[] = [
    { id: 3, str: 'sdfg' },
    { id: 1, str: 'sdfg' },
    { id: 2, str: 'sdfg' },
];

console.log(sortObjects(objects, 'descending'));
console.log(sortObjects(objects, 'ascending'));
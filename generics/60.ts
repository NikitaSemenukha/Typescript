function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}


const result = logMiddleware<number>(10);
const result1 = logMiddleware('WER');

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, 1);
};

getSplitedHalf<number>([1, 3, 4]);
// 62
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T
}

const logline: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}
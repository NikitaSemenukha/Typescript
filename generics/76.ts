// Template literal types

type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';


type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

// обратно распокавать, убрав can
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOrWriteBulk<Access>

type ErrorOrSuccess = 'error' | 'success';

interface ResponseT {
    result: `http${Capitalize<ErrorOrSuccess>}`
}

const a23: ResponseT = {
    result: 'httpSuccess'
}
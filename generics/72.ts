const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
    additionalData: T extends 'success' ? string : number;
}

const suc: HTTPResponse<'success'> = {
    code: 200,
    data: 'done',
    additionalData: 'done',
}

const err: HTTPResponse<'failed'> = {
    code: 200,
    data: new Error(),
    additionalData: 200
};
class User1 {
    id: number;
    name: string;
}

class UserPersistend extends User1 {
    dbId: string;
}

function getUser(dbIdorId: string | number): User1 | UserPersistend {
    if (typeof dbIdorId === 'number')
        return new User1();
    else
        return new UserPersistend();
}
type UserOrUserPersistend<T extends string | number> = T extends number ? User : UserPersistend;

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
    if (typeof id === 'number')
        return new User1() as UserOrUserPersistend<T>;
    else
        return new UserPersistend() as UserOrUserPersistend<T>;
}

const rs = getUser(1);
const rs2 = getUser2('sdfg');
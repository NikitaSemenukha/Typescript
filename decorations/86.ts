//

interface IUsersService1 {
    users: number;
    getUsersInDatabase(): number;
}

type CreatedAt = {
    createdAt: Date;
}

function CreatedAt<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        createdAt: Date = new Date();
    };
}

@CreatedAt
class UserService1 implements IUsersService1 {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

const userService = new UserService1();
console.log((new UserService1() as IUsersService1 & CreatedAt).createdAt);
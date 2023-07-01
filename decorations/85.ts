// Фабрика декораторов

interface IUsersService {
    users: number;
    getUsersInDatabase(): number;
}

// @nullUser
@setUsers(2)
// @setUserAdvanced(4)
// @threeUserAdvanced
@log()
class UserService implements IUsersService {

    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}


function nullUser(target: Function) {
    target.prototype.users = 0;
}

function threeUserAdvanced<T extends {
    new(...args: any[]): {}
}>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

function setUsers(users: number) {
    console.log('seUsers init')
    return (target: Function) => {
        console.log('setUsers run')
        target.prototype.users = users;
    }
}

function setUserAdvanced(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        }
    }

}

function log() {
    console.log('log')
    return (target: Function) => {
        console.log('log run')
    }
}

console.log(new UserService().getUsersInDatabase());

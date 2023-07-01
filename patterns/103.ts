//Prototype

interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;

    constructor(
        public email: string,
        public name: string
    ) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

let user12 = new UserHistory('fd', 'Vasua');
console.log(user12);
let user21 = user12.clone();
user21.email = 'fgh';
console.log(user21);
console.log(user12);
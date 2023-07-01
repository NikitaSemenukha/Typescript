// class UserService {
//     static db: any;

//     static async getUser(id: number) {
//         return UserService.db.findById(id);
//     }

//     create() {
//         UserService.db;
//     }

//     // При компиляции выполняется в первую очередь
//     // Не может бить ассинхронным
//     static {
//         UserService.db = 'df';
//     }
// }

// Контекст

class IPayment {
    private date: Date = new Date();

    getDate(this: IPayment) {
        return this.date;
    };

    getDateArrow = () => {
        return this.date;
    }
}
const p = new IPayment();

const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
}

console.log(user.paymentDate())
console.log(user.paymentDateArrow())

class PaymentPersistent extends IPayment {

    save() {

        return super.getDate();
    }
}
// НАследуясь мы не можем получить стрелочную функцию используя super, но используя this мы можем ее использовать
console.log(new PaymentPersistent().save())

class UserBuilder {

    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuider {
        return this instanceof AdminBuider;
    }
}

class AdminBuider extends UserBuilder {
    // roles: string[];
}

const res = new UserBuilder().setName('Vasya');
const res2 = new AdminBuider().setName('Vasya');


let user1: UserBuilder | AdminBuider = new UserBuilder();


if (user1.isAdmin())
    console.log(user1)
else
    console.log(user1)
// // // class User {

// // //     name: string;
// // //     age: number;

// // //     constructor();
// // //     //Конструктор реализации
// // //     constructor(name: string);
// // //     constructor(age: number);
// // //     constructor(name: string, age: number)
// // //     // Конуструктор имплементации
// // //     constructor( ageOrName?: string | number, age?: number ) {
// // //         if( typeof ageOrName === 'string' )
// // //             this.name = ageOrName;
// // //         else if( typeof ageOrName === 'number' ){
// // //             this.age = ageOrName;
// // //         }    
// // //     };


// // // };

// // // const user2 = new User( 'Vasya' );
// // // console.log(user2);
// // // const user3 = new User(33);
// // // const user4 = new User('vasya', 33);
// // // class Admin {

// // //     role: number;
// // // }


// // // const userAdmin = new Admin();
// // // admin.role = 1;

// // enum PaymentStatus {

// //     Holded,
// //     Processed,
// //     Reversed
// // }

// // class Payment {

// //     id: number;
// //     status: PaymentStatus = PaymentStatus.Holded;
// //     createdAt: Date = new Date();
// //     updatedAt: Date;

// //     constructor(id: number) {
// //         this.id = id;
// //         this.status;
// //     }

// //     getPaymentLifeTime(): number {
// //         return new Date().getTime() - this.createdAt.getTime();
// //     }

// //     unholdPayment() {
// //         if (this.status == PaymentStatus.Processed) {
// //             throw new Error('Платеж не быть возвращен!');
// //         }
// //         this.status = PaymentStatus.Reversed;
// //         this.updatedAt = new Date();
// //     }

// // }


// // const payment = new Payment(1);
// // payment.unholdPayment();
// // console.log(payment)
// // const time = payment.getPaymentLifeTime();
// // console.log(time);
// /////////////////////////////////////////
// //Перегрпузка методов
// // class User {

// //     skills: string[] = [];

// //     // constructor();
// //     // constructor(skills?: string | string[]){
// //     //     if (typeof skills === 'string')
// //     //         this.skills.push(skills);
// //     //     else if(Array.isArray(skills))
// //     //         this.skills = skills;
// //     // }

// //     //перегрузка метода
// //     addSkill(skill: string): void;
// //     addSkill(skills: string[]): void;
// //     addSkill(addSkill: string | string[]): void {

// //         if (typeof addSkill === 'string')
// //             this.skills.push(addSkill);
// //         else
// //             this.skills = this.skills.concat(addSkill);

// //     }
// // }

// // const a = new User();
// // a.addSkill(['ergtyergt', 'etgfgh']);
// // console.log(a.skills);

// // class User {

// //     _login: string;
// //     password: string;


// //     set login(L: string) {
// //         this._login = 'user-' + L;
// //     }

// //     get login() {
// //         return this._login;
// //     }
// // }

// // const user = new User();
// // user.login = 'myLogin';
// // console.log(user);
// // console.log(user.login);



// //implements
// // interface ILogger {
// //     log(...args: any[]): void;
// //     error(...args: any[]): void;
// // };

// // class Looger implements ILogger {
// //     log(...args: any[]): void {
// //         console.log(...args)    
// //     }

// //     async error(...args: any[]): Promise<void> {
// //         throw new Error("Method not implemented.");
// //     }
// // }

// // interface IPayable {

// //     pay(paymentId: number): void;
// //     price?: number;
// // };

// // class User implements IPayable {
// //     pay(paymentId: number ): void {

// //     }
// //     price?: number | undefined;

// // }


// type PaymentStatus = 'new' | 'paid';

// class Payment {

//     id: number;
//     status: PaymentStatus = 'new';

//     constructor(id: number) {
//         this.id = id;
//     }

//     pay() {
//         this.status = 'paid';
//     }
// }


// class PersistedPayment extends Payment {
//     dataBaseId: number;
//     paidAt: Date;

//     constructor() {
//         const id = Math.random();
//         super(id);
//     };

//     save() {

//     };

//     //override метод
//     override pay(date?: Date) {
//         super.pay();
//         if (date)
//             this.paidAt = date;
//     }
// }

// class User {

//     name: string = 'user';
//     constructor() {
//         console.log(this.name);
//     }
// }

// class Admin extends User {
//     name: string = 'admin';

//     constructor(){
//         super();
//         console.log(this.name);
//     }
// }

// new Admin();

// class HttpError extends Error {

//     code: number;

//     constructor( message: string, code?: number ) {
//         super(message);
//         this.code = code ?? 500;
//     }
// }

class User {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Users extends Array<User> {
    searchByName(name: string) {
        return this.filter(u => u.name === name);
    };

    override toString(): string {
        return this.map(u => u.name).join(', ');
    }
};

const users = new Users();
users.push(new User('vasya'));
users.push(new User('vasya'));

console.log(users.toString());

class UserList {
    users: User[];


    push(u: User) {
        this.users.push(u);
    };
}

class Payment {

    date: Date;


}

class UserWithPayment extends Payment {
    name: string;
}

class UserWithPayment2 {
    name: User;
    password: Payment;

    constructor(user: User, payment: Payment) {
        this.name = user;
        this.password = payment;
    }
}
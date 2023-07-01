// // Декоратор accessor


// interface IUsersService {
//     users: number;
//     getUsersInDatabase(): number;
// }


// class UserService2 implements IUsersService {

//     private _users: number;

//     @Log()
//     set users(num: number) {
//         this._users = num;
//     }

//     get users() {
//         return this._users;
//     }

//     getUsersInDatabase(): number {
//         throw new Error('Error');
//     }
// }

// function Log() {
//     return (
//         target: Object,
//         _: string | symbol,
//         descriptor: PropertyDescriptor
//     ) => {
//         const setter = descriptor.set;
//         descriptor.set = (...args: any) => {
//             console.log(args);
//             setter?.apply(target, args);
//         }
//     }
// }

// const use = new UserService2();
// use.users = 1;
// console.log(use.users);
// // console.log(new UserService2().getUsersInDatabase());

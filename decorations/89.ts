// // Декоратор свойств


// interface IUsersService {
//     users: number;
//     getUsersInDatabase(): number;
// }


// class UserService2 implements IUsersService {
//     @Max(100)
//     users: number = 1000;

//     getUsersInDatabase(): number {
//         throw new Error('Error');
//     }
// }

// function Max(max: number) {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//     ) => {
//         let value: number;
//         const setter = function (newValue: number) {
//             if (newValue > max) {
//                 console.log(`Значения больше макисмального ${max}`)
//             }
//             else {
//                 value = newValue;
//             }
//         }

//         const getter = function () {
//             return value;
//         }

//         Object.defineProperty(target, propertyKey, {
//             set: setter,
//             get: getter
//         })
//     }
// }

// const use = new UserService2();
// use.users = 1;
// console.log(use.users);
// // console.log(new UserService2().getUsersInDatabase());
// use.users = 1000;
// console.log(use.users);

// // Декоратор перехвата ошибок

// interface IUsersService {
//     users: number;
//     getUsersInDatabase(): number;
// }


// class UserService2 implements IUsersService {

//     users: number = 1000;

//     @Catch({ rethrow: true })
//     getUsersInDatabase(): number {
//         throw new Error('Error');
//     }
// }

// function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
//     return (
//         target: Object,
//         _: string | symbol,
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
//     ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//         const method = descriptor.value;
//         descriptor.value = async (...args: any[]) => {
//             try {
//                 return await method?.apply(target, args);
//             }
//             catch (e) {
//                 if (e instanceof Error) {
//                     console.log(e.message);
//                     if (rethrow) {
//                         throw e;
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(new UserService2().getUsersInDatabase());

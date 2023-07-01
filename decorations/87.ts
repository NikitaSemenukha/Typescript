// // Декоратор метода

// interface IUsersService {
//     users: number;
//     getUsersInDatabase(): number;
// }


// class UserService2 implements IUsersService {

//     users: number = 1000;

//     @Log
//     getUsersInDatabase(): number {
//         throw new Error('Error');
//     }
// }

// function Log(
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
//     console.log(target);
//     console.log(propertyKey);
//     console.log(descriptor);
//     const oldValue = descriptor.value;
//     descriptor.value = () => {
//         console.log('no error');
//     }
// }

// console.log(new UserService2().getUsersInDatabase());

// // Патерн декоратора

// interface IUsersService {
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUsersService {

//     users: number = 1000;

//     getUsersInDatabase(): number {
//         return this.users;
//     }
// }


// function nullUser(obj: IUsersService) {
//     obj.users = 0;
//     return obj;
// }

// function logUsers(obj: IUsersService) {
//     console.log('Users' + obj.users);
//     return obj;
// }

// console.log(new UserService().getUsersInDatabase());
// console.log(nullUser(new UserService()).getUsersInDatabase());
// console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());
// console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());

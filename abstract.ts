// // abstract class Controller {

// //     abstract handle(req: any): void;

// //     handleVithLogs(req: any): void {
// //         console.log('Start');
// //         this.handle(req);
// //         console.log('Start');

// //     }
// // }

// // class UserController extends Controller {

// //     handle(req: any): void {
// //         console.log(req);
// //     }
// // }

// // //new Controller() - error

// // const c = new UserController();
// // c.handleVithLogs('Request');

// abstract class Logger {
//     abstract log(message: string): void;

//     printDate(date: Date): void {
//         this.log(date.toString());
//     }
// }

// class UserLogger extends Logger {

//     log(message: string): void {
//         console.log(message);
//     }

//     logWithDate(message: string): void {
//         this.printDate(new Date());
//         this.log(message);
//     }
// }

// const user2 = new UserLogger();
// user2.logWithDate('ghjekwl');
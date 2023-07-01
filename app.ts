// // const a = 1; 

// // const skill: [number, string] = [1, `Dev`];

// // const arr: [number, string, ...boolean[]] = [1, `sfd`, true, true];

// // enum Status{
// //     Published = 'published',
// //     Draft = 'draft',
// //     Deleted = 'deleted',
// // };

// // async function getFags(req: { 
// //     topicId: number; 
// //     status?: Status
// // }): Promise<{
// //     auestion: string;
// //     answer: string;
// //     tags: string[];
// //     likes: number;
// //     status: Status;
// // }[]>{

// //     const res = await fetch('/fags', {
// //         method: 'POST',
// //         body: JSON.stringify(req)
// //     })

// //     const data = await res.json();
// //     return data;
// // }


// //////////////////////////////////////////
// // Union

// // function logId(id: string | number | boolean) {
// //     console.log(id);
// // };


// // logId(1);
// // logId('fgbe');
// // logId(true);


// // interface User {
// //     login: string,
// //     password?: string
// // };

// // interface UserPro {
// //     login: string,
// //     password?: {
// //         type: 'primary' | 'secondary'
// //     };
// // };

// // function testPass(user: UserPro) {
// //     const t = user.password?.type;
// // };

// // function test(param?: string) {

// //     const t = param ?? testPass({ login: 'fgst', password: { type: 'secondary' } })
// //     console.log(t);

// // };


// // test();

// //////////////////////////////////
// // Never
// function generateEerror(message: string): never {
//     throw new Error(message);
// };

// function dumpError(): never {
//     return dumpError();
// };

// type PaymentAction = 'refund' | 'checkout' | 'reject';

// function processAction(action: PaymentAction) {
//     switch(action){

//         case 'refund':
//             break;
//         case 'checkout':
//             break;
//         case 'reject':
//             break;
//         default:
//             const _: never = action;
//             throw new Error('Нет такого значения');
//     }
// }

// // function isString(x: string | number): boolean{
// //     if( typeof x === 'string' )
// //         return true;
// //     else if( typeof x === 'number' )
// //         return false;
// //         // исчерпывающея ошибка
// //     generateEerror('dsfdghfsd');
// // }

// ////////////////////////////////////
// // null

// const n: null = null;
// const n1: any = null;
// // const n2: number = null;
// // const n3: string = null;
// // const n4: undefined = null;
// // const n5: boolean = null;


// interface User { 
//     name: string;
// };

// function getUser() {
//     if( Math.random() > 5 )
//         return null;
//     else
//         return {
//             name: 'Nikita'
//         } as User;
// }

// const user = getUser();
// if( user ) {
//     const n55 = user.name;

// }

// //////////////////////////////
// //Приведение типов


// let a = 5;
// let b: string = a.toString();
// let c = 'sg';
// let e = new String(a).valueOf();
// let f = new Boolean(a).valueOf();
// let d: number = parseInt(c);

// interface User {
//     email: string,
//     login: string
// };
// const user1: User = {
// //     name: 'Вася',
// //     email: 'vasikiy@',
// //     login: 'vasia'
// // };

// interface Admin {
//     name: string,
//     role: number
// };

// const admin: Admin = {
//     ...user1,
//     role: 1
// }

// // Функция мапинга, используется при приведения одного обьекта к другому
// function userToAdmin(user: User): Admin {

//     return {
//         name: user.name,
//         role: 1
//     };
// };

// ////////////////////////////////////////////
// // TypeGuard

// function logID(id: number | string){
//     if (isString(id))
//         console.log(id);
//     else
//         console.log(id);
// };


// function isString(x: string | number): x is string {
//     return typeof x === 'string';
// }

// function isAdmin( user: User | Admin ): user is Admin {
//     return 'role' in user;
// }

// function isAdminAlternative(user: User | Admin): user is Admin {
//     return (user as Admin).role !== undefined;
// }

// function setRole( user: User | Admin ) {
//     if( isAdmin(user) ) {
//         user.role = 0;
//     }
//     else {
//         throw new Error('User is undefined');
//     }
// };



// /// <reference path="./mod_lib/95.ts"/>
// console.log(A.aa);
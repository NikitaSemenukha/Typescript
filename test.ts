// const a: number = 5;
// let b: number = 12;
// let c = true;

// let array: string[] = ['sdfg','dfgh'];

// let e: any = 4;


// function test(a: string): string | number{
//     return '';
// }

// const test2 = (a: number): number =>{
//     return a * 2;
// }

// array = array.map(x => x.toLowerCase())

// function countCoord(coord: {lat: number, long?: number}){

// }

// function printIt(id: number | string){
//     if(typeof id == 'number')
//     {
//         console.log(id.toString());
//     }
//     else if( typeof id == 'string')
//     {
//         id.toUpperCase()
//     }
// }

// function getSum(a: number | number[]){
//     if(Array.isArray(a)){

//     }
// }

// const x: undefined = undefined;
// const z: null = null;

//////////////////////////////////////////////////////////////////////
// Interfaces and Types
// type Point = {
//     x: number,
//     y: number
// };

// type D3Point = Point & {
//     z: number;
// }

// interface iPoint{
//     x: number,
//     y: number
// };

// type stringOrNumber = string | number;

// function print(coord: Point){

// }

// interface I3DPoint extends iPoint{
//     z: number
// };

// interface Test{
//     a: number;
// }

// interface Test{
//     b: number;
// }

// const c = (point: Point)=> {

//     // type casting
//     const d: I3DPoint = point as I3DPoint;
// }

// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

////////////////////////////////////////////////////////////
//литеральные типы

// let c: 'test' = 'test';

// type actionType = 'up' | 'down';

// function performAction(action: actionType | ComlexAction){
//     switch(action){
//         case 'down':
//             return -1;
//         case 'up':
//             return 1;
//     }
// }

// interface ComlexAction{
//     s: string;
// };


///////////////////////////////////////////////////////////////////////////
// Classes

// class Point{
//     private x!: number;
//     readonly y!: number;

//     constructor(x: number, y: number){
//         this.x = x;
//         this.y = y;
//     }

//     protected func(){
        
//     }

// }



// class D3Point extends Point{
//     z!: number;

//     constructor(x: number, y: number, z: number){
//         super(x, y);
//         this.z = z;
//     }

//     func(name?: string){

//     }
// }

// const point = new D3Point(0, 0, 1);


// class StaticTest{

//     static c = 'sdf';

//     static test(){

//     }
// }


// const d = StaticTest.c;

// abstract class Test3{
//     myMethod(){

//     }
// }

// class Test4 extends Test3{

// }

// interface C{
//     test: () => number;
// }

// class D implements C{
//     test(){
//         return 3;
//     }
// }

//////////////////////////////////////////////////////////////////////////////////
//  Enum

//Числовой енам
// enum Direction{
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// enum DirectionStr{
//     Up = 'Up',
//     Down = 'Down'
// }

// // Гетерогенный енам
// enum Decisison{
//     Yes = 1,
//     No = calcEnams()
// }

// // Расчетный енам

// function calcEnams(){
//     return 2;
// }

// enum Test{
//     A
// }

// let test = Test.A;
// let nameA = Test[test] //A

// const enum ConstEnum{
//     A,
//     B
// }

// let c = ConstEnum.A;

// enum Dice{
//     One = 1,
//     Two,
//     Three
// }

// function ruDice(dice: Dice){
//     switch( dice ){
//         case Dice.One:
//             return '1'
//         case Dice.Two:
//             return '2'
//         case Dice.Three:
//             return '3';
//         default:
//             const a: never = dice;
//     }
// }


///////////////////////////////////////////////////
//Generics

// function logTime<T>(num: T): T{
//     console.log(new Date());
//     return num;
// }


// logTime<String>('asfdgf')


// interface MyInterface{

//     transform: <T, F>(a: F) => T
// }

// class MyGenClass<T>{
//     value!: T
// }

// interface TimeStamp{
//     stamp: number
// }

// function logTomeStamp<T extends TimeStamp>(num:T): T{
// console.log(num.stamp)
// return num;
// }


////////////////////////////////////////////////////////////
// Манипулции с типами

type Point = { x: number, y: number}

type P = keyof Point;

function my(){
    return { a: 1 }
}
type K = ReturnType<typeof my>

type MyFType = () => { a: number }

const MyArray = [
    { name: 'df', age: 30}
]
type Person = typeof MyArray[number]
type Age = typeof MyArray[number]['age']

type MessageOf<T> = T extends {message: unknown} ? T['message'] : never;
interface Email{
    message: string;
}

interface Cat{
    test: number;
}

type EmailMessageContents = MessageOf<Email>
type CatlMessageContents = MessageOf<Cat>


interface Test{
    [key: string]: number;
}
/*
Это интерфейс TypeScript с именем Test. Он определяет объект, который содержит ключи типа string и значения типа number. Это также называется индексной сигнатурой, которая позволяет определять объекты с динамическими ключами.

В данном случае, интерфейс Test может быть использован для определения объекта, где ключами будут строковые значения, а значениями - числа. Например:

typescript
Copy code
const obj: Test = {
  foo: 1,
  bar: 2,
  baz: 3
};
Здесь объект obj содержит три свойства, где ключами являются строки "foo", "bar" и "baz", а значениями - числа 1, 2 и 3.

Интерфейсы в TypeScript являются одним из способов определения типов данных, которые используются в приложении. Они могут быть использованы для определения типов объектов, функций, классов и т.д.
*/

// type OptionFlags<Type> = {
//     [Property in keof Type]: boolean
// }
type world = 'world'
type Greeting = `hello ${world}`
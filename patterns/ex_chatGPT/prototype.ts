/*
Prototype (Прототип):
Создайте прототип класса Car, который содержит информацию о марке и модели автомобиля, а также его характеристиках. 
Затем реализуйте метод clone(), который будет создавать копию объекта Car с теми же значениями полей.
Попробуйте создать несколько различных автомобилей, а затем создайте их клонированные копии.
*/

type vehicle = '33' | '44' | '18'

interface IPrototype<T> {
    clone(): T;
}

class Car implements IPrototype<Car> {

    private createAt: Date;

    constructor(
        public vehicle: vehicle,
    ) {
        this.createAt = new Date();
    }


    clone(): Car {
        let target = new Car(this.vehicle);
        target.createAt = this.createAt;
        return target;
    }

}


let car = new Car('18');
console.log(car);
let car1 = car.clone();
car1.vehicle = '33';
console.log(car);
console.log(car1);



/**
 * Вы успешно реализовали паттерн Prototype для класса Car.

В классе Car определен метод clone(), который создает копию объекта Car с теми же значениями полей. В методе clone(), вы создали новый экземпляр класса Car с тем же значением свойства vehicle и установили createAt равным значению createAt исходного объекта. Затем вы вернули новый объект Car в качестве результата.

Вы создали исходный объект car с значением vehicle равным '18', а затем создали его клон car1 с помощью метода clone(). После клонирования вы изменили значение свойства vehicle у объекта car1 на '33'.

При выводе объектов car и car1 в консоль, вы видите, что значения свойства vehicle в исходном объекте car остались без изменений, а значение свойства vehicle в клонированном объекте car1 изменилось.

Отличная работа! Вы успешно применили паттерн Prototype для создания клонов объектов Car.
 */
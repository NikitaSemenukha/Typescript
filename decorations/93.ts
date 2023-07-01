function Uni(name: string): any {
    console.log(`Инициализация ${name}`);

    return function () {
        console.log(`Вызов ${name}`);

    }
}

@Uni('Class')
class MyClass {

    @Uni('Param')
    props?: any;


    @Uni('Method')
    method(@Uni('Method Param') _: any) { }

    @Uni('static Param')
    static props2?: any;


    @Uni('static Method')
    static method2(@Uni('static Method Param') _: any) { }

    constructor(@Uni('Constructor params') _: any) {

    }
}
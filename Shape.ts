abstract class Shape {
    readonly abstract name: string;
    abstract color: string;

    abstract getArea(): number;
}


class Circle extends Shape {
    readonly name: string = 'Circle';
    color: string;
    radius: number;

    constructor(color: string, radius: number) {
        super();
        this.color = color;
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

    getShape() {
        return {
            name: this.name,
            color: this.color,
            radius: this.radius,
            area: this.getArea(),
            Circumference: this.getCircumference(),
        }
    }

    override toString(): string {
        return `${this.name.toString()} ${this.color.toString()}`
    }
}

class Rectangle extends Shape {

    readonly name: string = 'Rectangle';
    color: string;
    width: number;
    weigth: number;

    constructor(color: string, width: number, weigth: number) {
        super();
        this.color = color;
        this.width = width;
        this.weigth = weigth;
    }

    getArea(): number {
        return this.width * this.weigth;
    }

    getPerimetr(): number {
        return 2 * (this.width + this.weigth);
    }

    getShape() {
        return {
            name: this.name,
            color: this.color,
            width: this.width,
            weight: this.weigth,
            area: this.getArea(),
            Perimetr: this.getPerimetr(),
        }
    }

    override toString(): string {
        return `${this.name.toString()} ${this.color.toString()}`
    }
}

class Triangle extends Shape {
    readonly name: string = 'Triangle';
    color: string;
    sideA: number;
    sideB: number;
    sideC: number;

    constructor(color: string, sideA: number, sideB: number, sideC: number) {
        super();
        this.color = color;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea(): number {
        const SemiPerimetr = this.getPerimetr() / 2;
        return Math.sqrt(SemiPerimetr * (SemiPerimetr - this.sideA) * (SemiPerimetr - this.sideB) * (SemiPerimetr - this.sideC));
    }

    getPerimetr(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    getShape() {
        return {
            name: this.name,
            color: this.color,
            sideA: this.sideA,
            sideB: this.sideB,
            sideC: this.sideC,
            area: this.getArea(),
            Perimetr: this.getPerimetr(),
        }
    }

    override toString(): string {
        return `${this.name.toString()} ${this.color.toString()}`
    }
}


class ShapeCollection {
    shapes: Shape[];

    constructor() {
        this.shapes = [];
    }


    addShape(shape: Shape): void {
        this.shapes.push(shape);
    }

    getTotalArea(): number | null {
        let currentArea = 0;

        if (this.shapes.length > 0) {
            this.shapes.forEach((obj) => {
                currentArea += obj.getArea();
            })
            return currentArea;
        }
        else {
            return null;
        }
    }

    getShapeWithLargestArea(): Shape | null {
        if (this.shapes.length == 0) {
            return null;
        }
        else {
            let largestAreaShape = this.shapes[0];

            this.shapes.forEach((obj) => {
                if (obj.getArea() > largestAreaShape.getArea())
                    largestAreaShape = obj;
            })
            return largestAreaShape;
        }
    }
}

const circle1 = new Circle('red', 25);
const shapeCollection1 = new ShapeCollection();
shapeCollection1.addShape(circle1);
shapeCollection1.addShape(new Rectangle('yellow', 6, 2));
shapeCollection1.addShape(new Triangle('green', 25, 23, 12));

// console.log(shapeCollection1.shapes[1].name);
console.log(shapeCollection1.getTotalArea());
console.log(shapeCollection1.getShapeWithLargestArea());
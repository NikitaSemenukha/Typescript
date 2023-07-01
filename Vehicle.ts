class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) { };
};

class Delivery {
    constructor(
        public date: Date
    ) { };
};

class HomeDelivery extends Delivery {
    constructor(date: Date, public adress: string) {
        super(date);
    };
};

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    };
};

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;


    public addProduct(product: Product): void {
        this.products.push(product);
    };

    public deleteProduct(productId: number): void {
        this.products = this.products.filter((p: Product) => p.id !== productId);
    };

    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2);
    };

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    };

    public checkOut() {
        if (this.products.length == 0) {
            throw new Error('Нет товаров в корзине')
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки');
        }
        return { success: true };
    };
};


const cart = new Cart();
cart.addProduct(new Product(1, 'Печенье', 10));
cart.addProduct(new Product(2, 'Сок', 30));
cart.addProduct(new Product(3, 'Колбаса', 90));
cart.addProduct(new Product(4, 'Шоколад', 40));
cart.addProduct(new Product(5, 'Торт', 110));

cart.deleteProduct(2);


// cart.setDelivery(new HomeDelivery(new Date('2023-05-03'), 'Kiev'));
console.log(cart.getSum());
console.log(cart.checkOut());

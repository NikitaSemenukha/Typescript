// State

// Абстрактный класс состояния заказа
abstract class OrderState {
    abstract acceptOrder(): void;
    abstract prepareOrder(): void;
    abstract deliverOrder(): void;
    abstract cancelOrder(): void;
}

// Конкретное состояние: Новый заказ
class NewOrderState extends OrderState {
    acceptOrder(): void {
        console.log("Заказ принят");
    }

    prepareOrder(): void {
        console.log("Заказ не может быть готов, пока не принят");
    }

    deliverOrder(): void {
        console.log("Заказ не может быть доставлен, пока не готов");
    }

    cancelOrder(): void {
        console.log("Заказ отменен");
    }
}

// Конкретное состояние: Заказ принят
class AcceptedOrderState extends OrderState {
    acceptOrder(): void {
        console.log("Заказ уже принят");
    }

    prepareOrder(): void {
        console.log("Заказ готовится");
    }

    deliverOrder(): void {
        console.log("Заказ не может быть доставлен, пока не готов");
    }

    cancelOrder(): void {
        console.log("Заказ отменен");
    }
}

// Конкретное состояние: Заказ готовится
class PreparingOrderState extends OrderState {
    acceptOrder(): void {
        console.log("Заказ уже принят");
    }

    prepareOrder(): void {
        console.log("Заказ уже готовится");
    }

    deliverOrder(): void {
        console.log("Заказ готов к доставке");
    }

    cancelOrder(): void {
        console.log("Заказ отменен");
    }
}

// Конкретное состояние: Ожидает доставки
class WaitingForDeliveryState extends OrderState {
    acceptOrder(): void {
        console.log("Заказ уже принят");
    }

    prepareOrder(): void {
        console.log("Заказ уже готов");
    }

    deliverOrder(): void {
        console.log("Заказ доставлен");
    }

    cancelOrder(): void {
        console.log("Заказ отменен");
    }
}

// Конкретное состояние: Заказ доставлен
class DeliveredOrderState extends OrderState {
    acceptOrder(): void {
        console.log("Заказ уже принят");
    }

    prepareOrder(): void {
        console.log("Заказ уже готов");
    }

    deliverOrder(): void {
        console.log("Заказ уже доставлен");
    }

    cancelOrder(): void {
        console.log("Невозможно отменить доставленный заказ");
    }
}

// Класс заказа, который использует состояния
class Order {
    private state: OrderState;

    constructor() {
        this.state = new NewOrderState();
    }

    setState(state: OrderState): void {
        this.state = state;
    }

    acceptOrder(): void {
        this.state.acceptOrder();
    }

    prepareOrder(): void {
        this.state.prepareOrder();
    }

    deliverOrder(): void {
        this.state.deliverOrder();
    }

    cancelOrder(): void {
        this.state.cancelOrder();
    }
}

// Пример использования
const order = new Order();

order.acceptOrder(); // Вывод: "Заказ принят"
order.prepareOrder(); // Вывод: "Заказ не может быть готов, пока не принят"

order.setState(new AcceptedOrderState());
order.prepareOrder(); // Вывод: "Заказ готовится"

order.setState(new PreparingOrderState());
order.deliverOrder(); // Вывод: "Заказ готов к доставке"

order.setState(new WaitingForDeliveryState());
order.deliverOrder(); // Вывод: "Заказ доставлен"

order.cancelOrder(); // Вывод: "Невозможно отменить доставленный заказ"


// Bridge

interface IProvider {
    sendMessage(message: string): void;
    connect<T>(config: T): void;
    disconnect(): void;
}

class TelegramProvider implements IProvider {
    sendMessage(message: string): void {
        console.log(message);
    }

    connect<T>(config: T): void {
        console.log(config);
    }

    disconnect(): void {
        console.log('Disconnect');
    }

}


class WhatsUpProvider implements IProvider {
    sendMessage(message: string): void {
        console.log(message);
    }

    connect<T>(config: T): void {
        console.log(config);
    }

    disconnect(): void {
        console.log('Disconnect');
    }

}

class NotificationSender {
    constructor(private provider: IProvider) { }

    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('Message');
        this.provider.disconnect();
    }
}

class DelayNotificationSender extends NotificationSender {
    constructor(provider: IProvider) {
        super(provider);
    }

    sendDelayed() {

    }
}


const senderTg = new NotificationSender(new TelegramProvider());
senderTg.send();

const senderWU = new NotificationSender(new WhatsUpProvider());
senderWU.send();

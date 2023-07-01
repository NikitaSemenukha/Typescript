// Facade


class Notify {
    send(template: string, to: string) {
        console.log(`Send ${template}: ${to}`);
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}

class Template {
    private templates = [
        { name: 'other', template: '<h1>Шаблон</h1>' }
    ];

    getByName(name: string) {
        for (const template of this.templates) {
            if (template.name === name) {
                return template;
            }
        }
        return undefined;
    }

}

class NotificationFacade {

    private notify: Notify;
    private log: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.log = new Log();
    }

    send(to: string, templateName: string) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.log.log('нЕ НАЙДЕН ШАБЛОН');
            return;
        }
        this.notify.send(data.template, to);
        this.log.log('Шаблон найден');

    }
}

const s = new NotificationFacade();
s.send('a@gmail.com', 'other');
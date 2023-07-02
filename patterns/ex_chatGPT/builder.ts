/*
Builder (Строитель):
Представьте, что у вас есть приложение для создания и отправки электронных писем. 
Вы хотите использовать паттерн Строитель для создания объектов типа Email, 
где вы можете поэтапно создавать и настраивать различные атрибуты письма, 
такие как отправитель, получатель, тема и содержимое.
*/

class Email {
    constructor(
        public sender: string,
        public recipient: string,
        public subject: string,
        public content: string,
        public createdAt: Date
    ) { }
}

class EmailBuilder {
    private sender: string = '';
    private recipient: string = '';
    private subject: string = '';
    private content: string = '';
    private createdAt: Date = new Date();

    setSender(sender: string): EmailBuilder {
        this.sender = sender;
        return this;
    }

    setRecipient(recipient: string): EmailBuilder {
        this.recipient = recipient;
        return this;
    }

    setSubject(subject: string): EmailBuilder {
        this.subject = subject;
        return this;
    }

    setContent(content: string): EmailBuilder {
        this.content = content;
        return this;
    }

    setCreatedAt(createdAt: Date): EmailBuilder {
        this.createdAt = createdAt;
        return this;
    }

    build(): Email {
        return new Email(
            this.sender,
            this.recipient,
            this.subject,
            this.content,
            this.createdAt
        );
    }
}

const emailBuilder = new EmailBuilder();

const email = emailBuilder
    .setSender('example@example.com')
    .setRecipient('recipient@example.com')
    .setSubject('Hello')
    .setContent('This is the content of the email')
    .setCreatedAt(new Date())
    .build();

console.log(email);

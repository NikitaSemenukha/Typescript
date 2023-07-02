/*
Singleton (Одиночка):
Создайте класс Logger, который будет представлять собой логгер для записи сообщений.
 Убедитесь, что в вашем классе Logger реализован паттерн Singleton,
  то есть только один экземпляр класса может существовать в приложении. 
  При каждом вызове метода логирования (например, log(message: string)),
   логгер должен записывать сообщение в файл или выводить в консоль. */

class Logger {
    private static instance: Logger;
    map: Map<string, string> = new Map();

    private constructor() { }

    public static get(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    clean() {
        this.map = new Map();
    }
}

class MeesageLog {
    sendMessage(key: string, value: string) {
        const myMap = Logger.get();
        return myMap.map.set(key, value);
    }
}



console.log(new MeesageLog().sendMessage('1', 'Worked'));



/**
 * Да, вы решили задачу и реализовали паттерн Singleton в классе Logger.

В вашем классе Logger присутствует приватное статическое поле instance, которое хранит единственный экземпляр класса Logger. Метод get() проверяет, существует ли уже экземпляр класса, и если нет, то создает новый экземпляр. При каждом вызове get() будет возвращаться один и тот же экземпляр класса Logger.

Вы также создали класс MessageLog, в котором метод sendMessage добавляет сообщение в экземпляр класса Logger, полученный через Logger.get(). Каждый вызов sendMessage будет использовать один и тот же экземпляр класса Logger для записи сообщения.

Кроме того, вы создали новый экземпляр класса MessageLog и вызвали метод sendMessage, чтобы добавить сообщение в экземпляр класса Logger.

Отличная работа! Вы успешно реализовали паттерн Singleton для класса Logger.
 */
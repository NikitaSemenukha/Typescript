// Command

class User14 {
    constructor(public userId: number) { }
}

class CommandHistory {
    public commands: Command[] = [];

    push(command: Command) {
        this.commands.push(command);
    }

    remove(command: Command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}

abstract class Command {
    public commandId: number;

    abstract execute(): void;

    constructor(public history: CommandHistory) {
        this.commandId = Math.random();
    }
}

class AddUserCommand extends Command {

    constructor(
        private user: User14,
        private reciever: UserService12,
        history: CommandHistory
    ) {
        super(history);
    }

    execute(): void {
        this.reciever.saveUser(this.user);
        this.history.push(this);
    }

    undo(): void {
        this.reciever.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}

class UserService12 {
    saveUser(user: User14) {
        console.log('Added user, userId - ', user.userId);
    }

    deleteUser(userId: number) {
        console.log('Added user, userId - ', userId);
    }

}

class Conntroller {
    reciever: UserService12;
    history: CommandHistory = new CommandHistory();

    addReciever(reciever: UserService12) {
        this.reciever = reciever;
    }

    run() {
        const addUserCommand = new AddUserCommand(
            new User14(1),
            this.reciever,
            this.history
        );
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}

const controller_ = new Conntroller();
controller_.addReciever(new UserService12());
controller_.run();
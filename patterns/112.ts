// Chain of command

interface IMiddleware {
    next(mid: IMiddleware): IMiddleware;
    handle(request: any): any;
}

abstract class AbstractMidleware implements IMiddleware {
    private nextMiddleware: IMiddleware;

    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid;
        return mid;
    }

    handle(request: any) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }

}

class AuthMiddleware extends AbstractMidleware {
    override handle(request: any) {
        console.log('AuthMiddleware');
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { erorr: 'Вы не авторзованы' };
    }
}

class ValidateMiddleware extends AbstractMidleware {
    override handle(request: any) {
        console.log('ValidateMiddleware');
        if (request.body) {
            return super.handle(request);
        }
        return { erorr: 'Нет body' };
    }
}

class CoontrollerMiddleware extends AbstractMidleware {
    override handle(request: any) {
        console.log('ControllerMiddleware');
        return { success: request };
    }
}

const controller = new CoontrollerMiddleware();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);

console.log(auth.handle({
    userId: 1,
    body: 'Success',
}));
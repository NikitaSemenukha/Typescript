//Валидация форм

interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: 'Vasya',
    password: '123'
}

const formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть больше 5 символов' }
}

type Validation<T> = {
    [K in keyof T]: {
        isValid: true;
    } | {
        isValid: false;
        errorMessage: string;
    }
}

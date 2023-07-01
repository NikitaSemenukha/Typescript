//Mapped Types


type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier,
}

// -? все свойства обязательны
// +? все свойства не обязательны
// +readonly добавить readonly ко все свойствам
type ModifierToAccess<Type> = {
    +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'>]-?: boolean;
}

/*
Плюс данного метода в том что 
мы не потеряем в будущем никаких свойст
*/
type UserAccess2 = ModifierToAccess<UserRoles>;

// Когда это лучше использовать? Когда в обьекте совпадающие ключи, но в обьекте нужны другие значения
// Улучшает обцыональность

type UserAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean,
}
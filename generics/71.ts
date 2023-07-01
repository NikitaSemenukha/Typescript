interface Role {
    name: string;
}
interface Permission {
    endDate: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const u23ser: User = {
    name: 'Вася',
    roles: [],
    permission: {
        endDate: new Date(),
    }
};

// В js
const nameUser = u23ser['name'];
const roleNames = 'roles';

type rolesType = User['roles'];
type roleTyp2 = User[typeof roleNames]


type roleType = User['roles'][number];
console.log();
type dateType = User['permission']['endDate'];


//readonly
const roles = ['admin', 'user', 'super-user'] as const;
type roleTypes = typeof roles[number];
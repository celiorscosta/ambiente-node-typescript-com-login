export class User {
    public readonly id: string | null;
    public name: string;
    public email: string;
    public password: string;

    constructor({ id, name, email, password }: User) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
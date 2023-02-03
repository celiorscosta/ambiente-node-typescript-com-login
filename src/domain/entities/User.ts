export class User {
    private _id: string | null;
    private _name: string;
    private _email: string;
    private _password: string;

    constructor(id: string | null, name: string, email: string, password: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
    }
}
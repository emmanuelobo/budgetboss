export class User{

    constructor(public id: number,
    public username: string,
    public password: string,
    public email?: string,
    public firstname?: string,
    public lastname?: string){}
}
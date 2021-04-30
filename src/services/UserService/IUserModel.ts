export interface IUserModel {
    createUser(
        name: String,
        email: String,
        password: String,
        role: String,
    ): Promise<any>;
}
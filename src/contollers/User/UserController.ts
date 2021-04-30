import { userService } from './../../services/UserService/UserService';
import { logger } from '../../lib/logger';
class UserController {
    // constructor() {

    // }

    /**
     * static getInstance
     */
    public static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    private static instance: UserController;
    /**
     * createUser
     */
    public createUser = async ({ params, headers, body }: any) => {
        const { email, password, name, role } = body;
        logger("User Controller -Create User :::::::::", body)
        console.log(body, params)
        return await userService.createUser(email, password, name, role);
    }

    public getUserToken = async ({ params, headers, body }: any) => {
        const { email, password } = body;
        logger("User Controller - get User ::::", JSON.stringify(body))
        console.log(email, password)
        return await userService.getUserToken(email, password);

    }
    // public getAllUsers = async ({ params, headers, body }: any) => {
    //     const { email, password } = params;
    //     logger("User Controller - getAllUsers ::::", JSON.stringify(params))
    //     return await userService.getAllUsers();

    // }
    public deleteUser = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await userService.deleteUser(id as String);
    }
    public updateUser = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await userService.updateUser(id as String, { ...body });
    }
}

export default UserController.getInstance();
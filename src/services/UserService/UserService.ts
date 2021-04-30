import { BaseRepository } from './../../repositories/BaseRepository';
import { logger } from './../../lib/logger';
import { IUserModel } from './IUserModel';
import jwt from 'jsonwebtoken'
require('dotenv').config()
export class UserService implements IUserModel {
    private baseRepo = new BaseRepository();

    public static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    private static instance: UserService;
    /**
     * createUser =
       =>*/
    public createUser = async (email: String, password: String, name: String, role: String): Promise<any> => {


        logger("User service - createUser :::::", { email, password, name, role });
        return this.baseRepo.insert(email, password, name, role);

    }

    /**
     * getUserrole
     */
    public getUserToken = async (email: String, password: String): Promise<any> => {

        logger("User Service -getUser::::: ", process.env.SECRET_KEY);
        try {

            const user: any = await this.baseRepo.getOne(email, password);
            if (user) {
                // Generate an access token
                const accessToken = jwt.sign({ email: user.email, name: user.name, role: user.role, userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

                return ({
                    accessToken
                });
            } else {
                throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }

    }

    public getAllUsers = async (): Promise<any> => {

        logger("User Service -GetAllUsers::::: ", process.env.SECRET_KEY);
        try {

            const users: any = await this.baseRepo.getAll();
            if (users) {
                // Generate an access token

                return ({
                    data: users
                });
            } else {
                throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }

    }


    public updateUser = async (id: String, data: any): Promise<any> => {
        logger("Product Service Update Product::::: ",);
        try {
            const user: any = await this.baseRepo.update(id, data);
            if (user) {
                // Generate an access token
                return ({
                    data: user
                });
            } else {
                throw new Error({ message: 'Product not found', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }

    }

    public deleteUser = async (id: String): Promise<any> => {

        try {
            return await this.baseRepo.deleteOne(id);
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }

}
export const userService = UserService.getInstance()
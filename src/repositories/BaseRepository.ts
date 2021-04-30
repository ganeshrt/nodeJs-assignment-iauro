import { logger } from './../lib/logger';
import { IUserModel } from './../services/UserService/IUserModel';
import mongoose from 'mongoose';
import User from './User/userModel'
export class BaseRepository {

    /**
     * insert
     */
    public insert(email: String, password: String, name: String, role: String) {
        logger("BaseRepository - insert ", {});
        const user = new User({ email, password, name, role });
        return user.save().then(res => {
            return res;
        }).catch(err => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public getOne(email: String, password: String) {
        // const user = new User({ name, password });
        logger("BaseRepository - getOne ", {});

        return User.findOne({ email, password }).then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }
    public getAll() {
        // const user = new User({ name, password });
        logger("BaseRepository - getAllUsers ", {});

        return User.find().then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }

    public deleteOne(id: String) {
        // const product = new product({ name, password });
        logger("BaseRepository - getOne ", {});

        return User.remove({ _id: id }).then(res => {
            console.log("product exist...!");
            return res;
        }).catch(err => {
            console.log("product not exist..");
            return err;
        })

    }

    public update(id: String, obj: any) {
        // const product = new product({ name, password });
        logger("BaseRepository - getAllproducts ", {});
        return User.updateOne({ _id: id }, { ...obj }).then(res => {
            console.log("product exist...!");
            return res;
        }).catch(err => {
            console.log("product not exist..");
            return err;
        })
    }
}
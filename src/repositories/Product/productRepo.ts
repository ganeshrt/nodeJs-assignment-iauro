import { logger } from '../../lib/logger';
import mongoose from 'mongoose';
import Product from './productModel'
export class ProductRepository {

    /**
     * insert
     */
    public insert(productName: String, userId: String, visible: String,) {
        logger("BaseRepository - insert ", {});
        const product = new Product({ productName, userId, visible });
        return product.save().then((res: any) => {
            return res;
        }).catch((err: any) => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public deleteOne(id: String) {
        // const product = new product({ name, password });
        logger("BaseRepository - getOne ", {});

        return Product.remove({ _id: id }).then(res => {
            console.log("product exist...!");
            return res;
        }).catch(err => {
            console.log("product not exist..");
            return err;
        })

    }
    public getAll(role: String, userId: String) {
        // const product = new product({ name, password });
        logger("BaseRepository - getAllproducts ", {});
        const visible = role === "user";
        if (visible) {
            return Product.find({ visible, userId }).then(res => {
                console.log("product exist...!", res);

                return res;
            }).catch(err => {
                console.log("product not exist..");
                return err;
            })
        } else {
            return Product.find({}).then(res => {
                console.log("product exist...!", res);

                return res;
            }).catch(err => {
                console.log("product not exist..");
                return err;
            })
        }

    }

    public update(id: String, obj: any) {
        // const product = new product({ name, password });
        logger("BaseRepository - getAllproducts ", {});
        return Product.updateOne({ _id: id }, { ...obj }).then(res => {
            console.log("product exist...!");
            return res;
        }).catch(err => {
            console.log("product not exist..");
            return err;
        })
    }

}
import { ProductRepository } from '../../repositories/Product/productRepo';
import { logger } from '../../lib/logger';
// import { IProductModel } from './IProductModel';
import jwt from 'jsonwebtoken'
require('dotenv').config()
export class ProductService {
    private productRepo = new ProductRepository();

    public static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    private static instance: ProductService;

    public createProduct = async (
        productName: String,
        userId: String,
        visible: String): Promise<any> => {
        logger("Product service - create :::::", JSON.stringify({ productName, userId, visible }));
        return this.productRepo.insert(productName, userId, visible);

    }

    /**
     * getUserrole
     */
    public getAllProduct = async (role: String, userId: String): Promise<any> => {
        let Products: any;
        logger("Product Service -get all::::: ", {});
        try {
            Products = await this.productRepo.getAll(role, userId);
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
        return Products;
    }

    public updateProduct = async (id: String, data: any): Promise<any> => {
        logger("Product Service Update Product::::: ",);
        try {
            const Product: any = await this.productRepo.update(id, data);
            if (Product) {
                // Generate an access token
                return ({
                    data: Product
                });
            } else {
                throw new Error({ message: 'Product not found', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }

    }

    public deleteProduct = async (id: String): Promise<any> => {
        try {
            return await this.productRepo.deleteOne(id);
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }


}
export const productService = ProductService.getInstance()
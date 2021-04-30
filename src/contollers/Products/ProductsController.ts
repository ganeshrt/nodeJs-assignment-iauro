import { productService } from '../../services/ProductsService/ProductService';
import { logger } from '../../lib/logger';
class ProductController {
    // constructor() {

    // }

    /**
     * static getInstance
     */
    public static getInstance() {
        if (!ProductController.instance) {
            ProductController.instance = new ProductController();
        }
        return ProductController.instance;
    }
    private static instance: ProductController;

    public createProduct = async ({ params, headers, body }: any) => {
        const { productName, userId, visible } = body
        console.log("body::", body)
        return await productService.createProduct(productName, userId, visible);
    }
    public getAllProduct = async ({ params, headers, body }: any) => {

        return await productService.getAllProduct(body.role, body.userId);
    }

    public updateProduct = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await productService.updateProduct(id, body);

    }

    public deleteProduct = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await productService.deleteProduct(id as String);
    }

    // public createUser = async ({ params, headers, body }: any) => {
    //     const { email, password, name, city } = body;
    //     logger("User Controller -Create User :::::::::", body)
    //     return await userService.createUser(email, password, name, city);
    // }

    // public getUserToken = async ({ params, headers, body }: any) => {
    //     const { email, password } = params;
    //     logger("User Controller - get User ::::", JSON.stringify(params))
    //     console.log(email, password)
    //     return await userService.getUserToken(email, password);

    // }
    // public getAllUsers = async ({ params, headers, body }: any) => {
    //     const { email, password } = params;
    //     logger("User Controller - getAllUsers ::::", JSON.stringify(params))
    //     return await userService.getAllUsers();

    // }

}

export default ProductController.getInstance();
import { authJWt } from '../../lib/authenticate';
import { logger } from '../../lib/logger';
import { Router } from "express";
import { checkSchema } from 'express-validator/check'
import productController from './ProductsController'
import controllerAdapter from '../../middlewares/controllerAdapter';
import validation from './validation'
// import { upload } from '../../lib/handleMulter';

const router = Router();
router.post('/', authJWt, checkSchema(validation.product.post as any), controllerAdapter(productController, "createProduct"))

router.get('/all', authJWt, controllerAdapter(productController, "getAllProduct"))
router.put('/:id', authJWt, checkSchema(validation.product.put as any), controllerAdapter(productController, "updateProduct"))

router.delete('/:id', authJWt, checkSchema(validation.product.delete as any), controllerAdapter(productController, "deleteProduct"))
export default router;
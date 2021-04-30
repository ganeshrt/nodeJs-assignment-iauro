import { authJWt } from './../../lib/authenticate';
import { logger } from './../../lib/logger';
import { Router } from "express";
import { checkSchema } from 'express-validator/check'
import userController from './UserController'
import controllerAdapter from '../../middlewares/controllerAdapter';
import validation from './validation'
// import { upload } from '../../lib/handleMulter';
const router = Router();
router.post('/', checkSchema(validation.user.post as any), controllerAdapter(userController, "createUser"))

router.post('/login', checkSchema(validation.user.get as any), controllerAdapter(userController, "getUserToken"))
// router.get('/', authJWt, checkSchema(validation.user.get as any), controllerAdapter(userController, "getAllUsers"))
export default router;
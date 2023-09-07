import express from 'express';
import { ProductsData } from '../data/ProductsData';
import { ProductsBusiness } from '../business/ProductsBusiness';
import { ProductsController } from '../controller/ProductsController';

export const productsRouter = express.Router();

const productsBusiness = new ProductsBusiness(new ProductsData());
const productsController = new ProductsController(productsBusiness);

productsRouter.get('/', productsController.getAllProducts);

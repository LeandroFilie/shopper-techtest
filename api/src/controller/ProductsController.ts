import { Request, Response } from 'express';
import { ProductsBusiness } from '../business/ProductsBusiness';

export class ProductsController{
  constructor(
        private productsBusiness: ProductsBusiness
  ){}
  getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await this.productsBusiness.getAllProducts();
      res.status(200).send({products});
    } catch (error: any) {
      res.status(error.statusCode || 400).send({message: error.message});
    }
  };
}

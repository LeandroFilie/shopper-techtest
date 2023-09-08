import { Request, Response } from 'express';
import { ProductsBusiness } from '../business/ProductsBusiness';

export class ProductsController{
  constructor(
        private productsBusiness: ProductsBusiness,
  ){}

  validate = async (req: Request, res: Response): Promise<void> => {
    try {
      const file = req.file as Express.Multer.File;
      const products = await this.productsBusiness.validateFile(file);
      res.status(200).send({products});
    } catch (error: any) {
      res.status(error.statusCode || 400).send({message: error.message});
    }
  };

  updatePrices = async (req: Request, res: Response): Promise<void> => {
    try {
      const { products } = req.body;
      await this.productsBusiness.updatePrices(products);
      res.status(204).send();
    } catch (error: any) {
      res.status(error.statusCode || 400).send({message: error.message});
    }
  };
}

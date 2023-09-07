import { ProductsData } from '../data/ProductsData';

export class ProductsBusiness {
  constructor(private ProductsData: ProductsData) {}

  getAllProducts = async (): Promise<any> => {
    try {
      const products = await this.ProductsData.getProducts();
      return products;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

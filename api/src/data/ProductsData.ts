import { BaseDatabase } from './BaseData';

export class ProductsData extends BaseDatabase {
  protected TABLE_NAME: string = 'products';

  getProductPrice = async (product_code: number): Promise<{sales_price: string, cost_price: string}> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx('products').select('cost_price', 'sales_price').where({code: product_code});
      await trx.commit();
      return result[0];
    } catch (error: any) {
      console.log(error);

      throw new Error(error.sqlMessage || error.message);
    }
  };

  getAllProducts = async (): Promise<Array<{code: number}>> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx('products').select('code');
      await trx.commit();
      return result;
    } catch (error: any) {
      console.log(error);

      throw new Error(error.sqlMessage || error.message);
    }
  };
}

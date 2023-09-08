import { BaseDatabase } from './BaseData';

export class ProductsData extends BaseDatabase {
  protected TABLE_NAME: string = 'products';

  getProductPrice = async (product_code: number): Promise<{sales_price: string, cost_price: string}> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME).select('cost_price', 'sales_price').where({code: product_code});
      await trx.commit();
      return result[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  getProduct = async (product_code: number): Promise<{code: number, name: string}> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME).select('code', 'name').where({code: product_code});
      await trx.commit();
      return result[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  updateProductPrice = async (product_code: number, new_price: number): Promise<void> => {
    try {
      const trx = await this.connection.transaction();
      await trx(this.TABLE_NAME).update({sales_price: new_price}).where({code: product_code});
      await trx.commit();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

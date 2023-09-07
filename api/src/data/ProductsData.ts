import { Products } from '../model/Products';
import { BaseDatabase } from './BaseData';

export class ProductsData extends BaseDatabase {
  protected TABLE_NAME: string = 'products';

  getProducts = async (): Promise<Products[]> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx('packs').select();
      await trx.commit();
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

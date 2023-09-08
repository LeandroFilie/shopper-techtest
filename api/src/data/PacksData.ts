import { Packs } from '../model/Packs';
import { BaseDatabase } from './BaseData';

export class PacksData extends BaseDatabase {
  protected TABLE_NAME: string = 'packs';

  getAllPacks = async (): Promise<Packs[]> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME).select('*');
      await trx.commit();
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

}

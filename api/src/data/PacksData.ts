import { Packs } from '../model/Packs';
import { BaseDatabase } from './BaseData';

export class PacksData extends BaseDatabase {
  protected TABLE_NAME: string = 'packs';

  getPack = async (pack_id: number): Promise<Packs> => {
    try {
      const trx = await this.connection.transaction();
      const result = await trx(this.TABLE_NAME).select('*').where({pack_id});
      await trx.commit();
      return result[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

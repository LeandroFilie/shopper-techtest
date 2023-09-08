import { ProductsData } from '../data/ProductsData';
import fs from 'fs';
import { CSVFile } from '../types/csvFile';
import { PacksData } from '../data/PacksData';
import { PacksWithItems } from '../types/packsWithItems';

export class ProductsBusiness {
  constructor(private productsData: ProductsData, private packsData: PacksData) {}

  validateFile = async (file: Express.Multer.File): Promise<CSVFile[]> => {
    try {
      const linesOfFile = fs.readFileSync(file.path).toString().split('\r\n');
      const valuesArray = linesOfFile.splice(1).map((line) => line.split(','));

      const values = valuesArray.map<CSVFile>((value) => (
        {product_code: Number(value[0]?.trim()), new_price: Number(value[1]?.trim()), message: []}
      ));

      let valuesValidate = values.map((value) => {
        if(!value.product_code || !value.new_price){
          value.message?.push('produto ou preço não informados');
        }
        if(isNaN(value.new_price)){
          value.message?.push('preço inválido');
        }
        return value;
      });

      valuesValidate = await this.validateIfProductsExists(valuesValidate);
      valuesValidate = await this.validatePrice(valuesValidate);
      valuesValidate = await this.verifyPacks(valuesValidate);

      return valuesValidate;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  private getPrices = async (rows: CSVFile[]) => {
    const listOfPrices = rows.map((row) => {
      return this.productsData.getProductPrice(row.product_code);
    });
    const prices = await Promise.all(listOfPrices);
    return prices;
  };

  private validatePrice = async (rows: CSVFile[]) => {
    const listOfPrices = await this.getPrices(rows);

    const rowsValidate = rows.map((row, index) => {
      const {new_price} = row;
      if (new_price < Number(listOfPrices[index]?.cost_price)){
        row.message?.push('preço menor que o custo');
      }

      if(new_price > Number(listOfPrices[index]?.sales_price) * 1.10 || new_price < Number(listOfPrices[index]?.sales_price) * 0.90){
        row.message?.push('preço com alteração maior a 10% do preço atual');
      }

      return row;
    });
    return rowsValidate;
  };

  private validateIfProductsExists = async (rows: CSVFile[]) => {
    const listOfProducts = await this.productsData.getAllProducts();
    const arrayOfProducts = listOfProducts.map((product) => product.code);


    const rowsValidate = rows.map((row) => {
      const {product_code} = row;
      if(!arrayOfProducts.includes(product_code)){
        row.message?.push('produto não cadastrado');
      }
      return row;
    });

    return rowsValidate;
  };

  private filterPacks = async (rows: CSVFile[]): Promise<PacksWithItems[] > => {
    const listOfPacks = await this.packsData.getAllPacks();
    const arrayOfProducts = rows.map((row) => row.product_code);

    const groupedByPackId = Object.values(
      listOfPacks.reduce((acc, currentItem) => {
        const { pack_id, ...rest } = currentItem;

        if(arrayOfProducts.includes(pack_id)){
          if (!acc[pack_id]) {
            acc[pack_id] = { pack_id, items: [] };
          }

          acc[pack_id].items.push(rest);
        }

        return acc;
      }, {} as Record<number, PacksWithItems>)
    ) as PacksWithItems[];

    return groupedByPackId;
  };

  private verifyPacks = async (rows: CSVFile[]) => {
    const packs = await this.filterPacks(rows);

    packs.forEach((pack) => {
      const packIndex = rows.findIndex((value) => value.product_code === pack.pack_id);

      pack.items.forEach((item) => {
        if(!rows.find((value) => value.product_code === item.product_id)){
          rows[packIndex].message?.push(`componente com código ${item.product_id} do pack não está no arquivo`);
        } else {
          const itemIndex = rows.findIndex((value) => value.product_code === item.product_id);
          if(rows[packIndex].message?.includes('preço do pack diferente da soma dos preços dos componentes')){
            return;
          }

          if(rows[packIndex].new_price !== Number((rows[itemIndex].new_price * item.qty).toFixed(2))){
            rows[packIndex].message?.push('preço do pack diferente da soma dos preços dos componentes');
          }
        }
      });
    });

    return rows;
  };
}

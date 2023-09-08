import { ProductsData } from '../data/ProductsData';
import fs from 'fs';
import { CSVFile, CSVFileResponse } from '../types/csvFile';
import { PacksData } from '../data/PacksData';
import { PacksWithItems } from '../types/packsWithItems';

export class ProductsBusiness {
  constructor(private productsData: ProductsData, private packsData: PacksData) {}

  validateFile = async (file: Express.Multer.File): Promise<CSVFile[]> => {
    try {
      const linesOfFile = fs.readFileSync(file.path).toString().split('\r\n');
      const valuesArray = linesOfFile.splice(1).map((line) => line.split(','));

      if(valuesArray.length === 0){
        throw new Error('Missing file');
      }

      const values = valuesArray.map<CSVFile>((value) => ({
        product_code: Number(value[0]?.trim()),
        new_price: Number(value[1]?.trim()),
        rules: {
          missingInput: false,
          priceIsNaN: false,
          priceSmallerThanCost: false,
          priceChangeGreaterThan10Percent: false,
          notExistsProduct: false,
          packComponentNotPresent: false,
          packPriceNotEqualToSumOfComponents: false
        }
      }));

      let valuesValidate = values.map((value) => {
        if(!value.product_code || !value.new_price){
          value.rules.missingInput = true;
        }
        if(isNaN(value.new_price)){
          value.rules.priceIsNaN = true;
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

  updatePrices = async (products: CSVFile[]): Promise<void> => {
    try {
      if(products.length === 0){
        throw new Error('Missing file');
      }

      const promises = products.map((row) => {
        if(Object.values(row.rules).some((rule) => rule === true)){
          throw new Error('Invalid File');
        }

        return this.productsData.updateProductPrice(row.product_code, row.new_price);
      });

      await Promise.all(promises);
    } catch (error: any) {
      console.log(error);

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

  private validatePrice = async (rows: CSVFile[]): Promise<CSVFileResponse[]> => {
    const listOfPrices = await this.getPrices(rows);

    const rowsValidate = rows.map((row, index) => {
      const {new_price} = row;
      if (new_price < Number(listOfPrices[index]?.cost_price)){
        row.rules.priceSmallerThanCost = true;
      }

      if(new_price > Number(listOfPrices[index]?.sales_price) * 1.10 || new_price < Number(listOfPrices[index]?.sales_price) * 0.90){
        row.rules.priceChangeGreaterThan10Percent = true;
      }

      return {...row, sales_price: listOfPrices[index]?.sales_price};
    });
    return rowsValidate;
  };

  private validateIfProductsExists = async (rows: CSVFile[]): Promise<CSVFileResponse[]> => {
    const promises = rows.map((row) => {
      return this.productsData.getProduct(row.product_code);
    });
    const products = await Promise.all(promises);

    products.forEach((product, index) => {
      if(!product){
        rows[index].rules.notExistsProduct = true;
      }
    });

    rows = rows.map((row, index) => {
      return {...row, name: products[index]?.name};
    });

    return rows;
  };

  private filterPacks = async (rows: CSVFile[]): Promise<PacksWithItems[] > => {
    const promises = rows.map((row) => {
      return this.packsData.getPack(row.product_code);
    });
    const listOfPacks = (await Promise.all(promises)).filter((pack) => pack !== undefined);
    console.log(listOfPacks);


    const groupedByPackId = Object.values(
      listOfPacks.reduce((acc, currentItem) => {
        const { pack_id, ...rest } = currentItem;
        if (!acc[pack_id]) {
          acc[pack_id] = { pack_id, items: [] };
        }

        acc[pack_id].items.push(rest);
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
          rows[packIndex].rules.packComponentNotPresent = true;
        } else {
          const itemIndex = rows.findIndex((value) => value.product_code === item.product_id);
          if(rows[packIndex].new_price !== Number((rows[itemIndex].new_price * item.qty).toFixed(2))){
            rows[packIndex].rules.packPriceNotEqualToSumOfComponents = true;
          }
        }
      });
    });

    return rows;
  };
}

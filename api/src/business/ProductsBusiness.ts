import { ProductsData } from '../data/ProductsData';
import fs from 'fs';
import { CSVFile } from '../types/csvFile';

export class ProductsBusiness {
  constructor(private ProductsData: ProductsData) {}

  validateFile = async (file: Express.Multer.File): Promise<CSVFile[]> => {
    try {
      const linesOfFile = fs.readFileSync(file.path).toString().split('\r\n');
      const valuesArray = linesOfFile.splice(1).map((line) => line.split(','));

      const values = valuesArray.map<CSVFile>((value) => (
        {product_code: Number(value[0].trim()), new_price: Number(value[1].trim()), message: []}
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



      return valuesValidate;
    } catch (error: any) {
      console.log(error);

      throw new Error(error.sqlMessage || error.message);
    }
  };

  private getPrices = async (rows: CSVFile[]) => {
    const listOfPrices = rows.map((row) => {
      return this.ProductsData.getProductPrice(row.product_code);
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
    const listOfProducts = await this.ProductsData.getAllProducts();
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
}

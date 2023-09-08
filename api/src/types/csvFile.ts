export interface CSVFile {
  product_code: number;
  new_price: number;
  rules: {
    missingInput: boolean;
    priceIsNaN: boolean;
    priceSmallerThanCost: boolean;
    priceChangeGreaterThan10Percent: boolean;
    notExistsProduct: boolean;
    packComponentNotPresent: boolean;
    packPriceNotEqualToSumOfComponents: boolean;
  };
}

export interface CSVFileResponse extends CSVFile {
  name?: string;
  sales_price?: string;
}
